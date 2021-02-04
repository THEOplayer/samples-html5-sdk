import {Playlist} from "./ui/Playlist";
import {Localization} from "./localization/Localization";
import {Util} from "./Util";

export class PlayerUtil {

    constructor(app) {
        this.app = app;
        this.theoplayerRef = undefined;
        this.playlist = undefined;
        this.adBreaks = [];
    }

    initPlayer(sourceIndex) {
        const _self = this;
        const app = this.app;

        _self.playlist = [];
        Playlist.clear(app.sourceIndex, Util.slug(app.appConfig.tabs[app.sourceIndex].name));

        if (this.theoplayerRef) {
            this.theoplayerRef.destroy();
        }

        const element = document.querySelector('.theoplayer-container');
        this.createTHEOplayerInfo(element);

        this.theoplayerRef = new THEOplayer.Player(element, {
            libraryLocation: '//cdn.theoplayer.com/dash/theoplayer/',
            verizonMedia: {
                onSeekOverAd: app.config.verizon.seekOverAd,
                ui: {
                    contentNotification: app.config.verizon.contentNotification,
                    adNotification: app.config.verizon.adNotification,
                    assetMarkers: app.config.verizon.assetMarkers,
                    adBreakMarkers: app.config.verizon.adBreakMarkers,
                },
                defaultSkipOffset: app.config.verizon.defaultSkipOffset
            },
            ui: {
                language: Localization.getSelectedLanguage(app,  app.appConfig.language) // this.getSelectedLanguage() // only en, ja, es, nl are supported
            },
            persistVolume: true
        });
        this.createCustomIcon(this.theoplayerRef);

        this.theoplayerRef.autoplay = true;
        this.theoplayerRef.preload = 'auto';
        // this.theoplayerRef.muted = true;

        const source = this.getSource(sourceIndex);
        if (this.isLiveStream(source)){
            element.classList.add('liveplayer')
            let liveResetCheck = true;
            this.theoplayerRef.addEventListener('progress', function(){
                const differenceCurrentTimeLivepoint = this.seekable.end() - this.currentTime;
                if(liveResetCheck && differenceCurrentTimeLivepoint>60) {
                    this.source = this.source;
                }
            });
            this.theoplayerRef.verizonMedia.ads.adBreaks.addEventListener('addadbreak', (event) => {
                event.adBreak.addEventListener('adbreakbegin', function(){
                    liveResetCheck = false
                });
                event.adBreak.addEventListener('adbreakend',  function(){
                    liveResetCheck = true
                });
            });
        } else {
            if (element.classList.contains('liveplayer')){
                element.classList.remove('liveplayer')
            }
        }

        this.theoplayerRef.verizonMedia.addEventListener('assetinforesponse', function (e) {
            _self.addMetadataToPlaylist(e.response);
        });

        this.theoplayerRef.verizonMedia.ads.adBreaks.addEventListener('addadbreak', function (event) {
            _self.adBreaks.push(event.adBreak);
        });

        // update the highlighting of the playlist
        this.currentAsset = -1;
        this.theoplayerRef.addEventListener('timeupdate', function() {
            _self.updateActiveAsset();
        });

        this.updateActiveQuality(this.theoplayerRef);
        this.subscribeToVerizonEvents(this.theoplayerRef);
        this.updateFeatures(sourceIndex);

        this.theoplayerRef.source = source;

        return this.playerRef;
    }

    isLiveStream(source) {
        return (source.sources.assetType && (source.sources.assetType == "channel" || source.sources.assetType == "event"));
    }

    updateActiveAsset() {
        const newAsset = this.getActiveAsset();
        if (newAsset && (newAsset.index != this.currentAsset)) {
            this.currentAsset = newAsset.index;
            Playlist.updateActiveItem(newAsset);
            document.querySelector("#currentAssetDescription").innerText = newAsset.resource.description;
        }
    }

    addMetadataToPlaylist(asset) {
        const _self = this;
        const app = this.app;
        const assets = this.theoplayerRef.verizonMedia.assets;
        if (this.playlist.length > 0) {
            asset.startTime = assets[this.playlist.length].startTime;
        } else {
            asset.startTime = 0;
        }
        asset.clickCallback = function () {
            _self.theoplayerRef.currentTime = asset.startTime;
        };
        this.playlist.push(asset);
        Playlist.addItem(asset, app.sourceIndex, Util.slug(app.appConfig.tabs[app.sourceIndex].name));

    }

    getSource(sourceIndex) {
        const app = this.app;
        const TABS = app.appConfig.tabs;
        return {
            sources: TABS[sourceIndex].source
        };
    }

    updateSkipOffset(newValue) {
        for (let i = 0; i < this.adBreaks.length; i++) {
            this.adBreaks[i].skipOffset = newValue;
        }
    }

    getActiveAsset() {
        const time = this.theoplayerRef.currentTime;
        const assets = this.theoplayerRef.verizonMedia.assets;
        let activeAssetOrAdBreak;
        for (let i = 0; i < assets.length; i++) {
            const asset = assets[i];
            if (asset.startTime <= time && time <= asset.endTime) {
                activeAssetOrAdBreak = {
                    type: asset.isAd ? 'adBreak' : 'asset',
                    resource: asset,
                    index: i
                }
            }
        }
        return activeAssetOrAdBreak;
    }

    getFeatures(sourceIndex) {
        return this.app.appConfig.tabs[sourceIndex].features;
    }

    createCustomIcon(player) {
        // setting up the rewind button by setting up a video-js component
        const Button = THEOplayer.videojs.getComponent('Button');
        const RewindButton = THEOplayer.videojs.extend(Button, {
            constructor: function() {
                Button.apply(this, arguments);
                /* initialize your button */
                // this.el() = created DOM-element

                // add tooltip
                const tooltipSpan = document.createElement('span');
                tooltipSpan.className = 'theo-button-tooltip vjs-hidden';
                tooltipSpan.innerText = 'Info';
                function toggleTooltip() {
                    tooltipSpan.classList.toggle('vjs-hidden');
                }
                this.el().addEventListener('mouseover', toggleTooltip);
                this.el().addEventListener('mouseout', toggleTooltip);
                this.el().appendChild(tooltipSpan);
            },
            handleClick: () => {
                document.querySelector('.theoplayer-info').classList.toggle('hidden');
            },
            buildCSSClass: function () {
                return 'fa fa-info vjs-button'; // insert all class names here
            }
        });
        THEOplayer.videojs.registerComponent('RewindButton', RewindButton);
        player.ui.getChild('controlBar').addChild('RewindButton', {});

    }

    updateActiveQuality(player) {
        const _self = this;
        player.videoTracks.addEventListener('addtrack', function(e0) {
            // detect quality changes of a track
            e0.track.addEventListener('activequalitychanged', function(e1) {
                document.querySelector("#currentVideoQuality").innerText = e1.quality.height + " ("+e1.quality.codecs+")";
                _self.writeEvents(JSON.stringify(e1));
            });
        });
    }
    clearEvents() {
        document.querySelector('#theoplayer-events textarea').value = "";
    }
    writeEvents(text) {
        document.querySelector('#theoplayer-events textarea').value = text + "\n" + document.querySelector('#theoplayer-events textarea').value;
        // document.querySelector('#theoplayer-events select').innerText = text+ "\n" + document.querySelector('#theoplayer-events select').innerText;

    }
    subscribeToVerizonEvents(player) {
        const _self = this;
        // verizonMedia events
        [
            'preplayresponse',
            'pingresponse',
            'assetinforesponse'
        ].forEach(function(e) {
            player.verizonMedia.addEventListener(e, function (e1) {
                _self.writeEvents(JSON.stringify(e1));
            });
        });
        // verizonMedia.assets events
        [
            'addasset',
            'removeasset'
        ].forEach(function(e) {
            player.verizonMedia.assets.addEventListener(e, function (e1) {
                _self.writeEvents(JSON.stringify(e1));
            });
        });
        // verizonMedia.ads events
        [
            'addadbreak',
            'removeadbreak'
        ].forEach(function(e) {
            player.verizonMedia.ads.adBreaks.addEventListener(e, function (e1) {
                _self.writeEvents(JSON.stringify(e1));
                if (e1.type == "addadbreak") {
                    // verizonMedia.ads.adBreak[i] events
                    [
                        'adbreakbegin',
                        'adbreakend',
                        'adbreakskip',
                        'updateadbreak'
                    ].forEach(function(e) {
                        e1.adBreak.addEventListener(e, function (e2) {
                            _self.writeEvents(JSON.stringify(e2));
                        });
                    });
                    // verizonMedia.as.adBreak.ads[i] events
                    for (let i = 0; i < e1.adBreak.ads.length; i++) {
                        [
                            'adbegin',
                            'adend',
                            'adfirstquartile',
                            'admidpoint',
                            'adthirdquartile',
                            'adcomplete'
                        ].forEach(function(e) {
                            e1.adBreak.ads[i].addEventListener(e, function (e2) {
                                _self.writeEvents(JSON.stringify(e2));
                            });
                        });
                    }
                }
            });
        });
    }

    updateFeatures(sourceIndex) {
        const features = this.getFeatures(sourceIndex);
        const featuresDiv = document.querySelector('#theoplayer-verizon-features');
        featuresDiv.innerHTML = "";
        for (let i = 0; i < features.length; i++) {
            const spanEl = document.createElement('span');
            spanEl.className = "badge badge-pill badge-primary";
            spanEl.innerText = features[i];
            featuresDiv.appendChild(spanEl);
        }
    }

    createTHEOplayerInfo(element) {
        const htmlToAdd = `<div class="theoplayer-info hidden">
                        <div class="card">
                            <div class="card-header" style="color: #212529">
                                <div id="card-title-spacer">
                                    <span id="currentAssetDescription"></span> &nbsp; <i class="fa fa-video"></i> <span id="currentVideoQuality">
                                </div>
                                <i class="far fa-window-close"> </span>
                            </div>
                            <div class="card-body" id="theoplayer-events">
                                <h5 class="card-title">Events</h5>
                                <p class="card-text">
                                      <textarea class="">
                                      </textarea>
                                </p>
                            </div>
                            <div class="card-footer text-muted" id="theoplayer-verizon-features">
                            </div>
                        </div>
                    </div>`;
        element.innerHTML = htmlToAdd;
        var closeButton = document.querySelector('.fa-window-close');
        closeButton.addEventListener('click', function() {
            document.querySelector('.theoplayer-info').classList.toggle('hidden');
        })
    }

}