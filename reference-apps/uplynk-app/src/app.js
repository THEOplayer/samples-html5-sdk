import {Tab} from "./ui/tab/Tab";
import {Util} from "./Util"
import {Localization} from "./localization/Localization";
import {AppModal} from "./ui/AppModal";
import {PlayerUtil} from "./player";
import {appConfig} from "./config";

export class App {

    constructor() {
        this.sourceIndex = 0;
        this.playerUtil = new PlayerUtil(this);
        this.firstLoad = false;
        this.appConfig = appConfig;
        this.config = {
            uplynk: {
                contentNotification: true,
                    adNotification: true,
                    assetMarkers: true,
                    adBreakMarkers: true,
                    seekOverAd: 'play-all',
                    defaultSkipOffset: -1,
            }
        };
    }

    init() {
        if (!this.firstLoad) {
            this.firstLoad = true;
            this.appModal = new AppModal(this);
        }
        Tab.createAll(this.appConfig.tabs);
        this.bindControls();
        Localization.localizeAppAppCopyright(this, this.appConfig.language);
        this.playerUtil.initPlayer(0);
    }

    reset() {
        const tabs = this.appConfig.tabs;
        const radioControlIds = [];
        const skipOffsets = [];
        const optionRadios = [];
        for (let i = 0; i < tabs.length; i++) {
            const config = tabs[i].config;
            const slugName = Util.slug(tabs[i].name);
            if (config.general.indexOf('coming-up-notification') > -1) {
                radioControlIds.push(slugName + "_contentNotification");
            }
            if (config.general.indexOf('ad-notification') > -1) {
                radioControlIds.push(slugName + "_adNotification");
            }
            if (config.general.indexOf('show-asset-markers') > -1) {
                radioControlIds.push(slugName + "_assetMarkers");
            }
            if (config.general.indexOf('show-ad-break-markers') > -1) {
                radioControlIds.push(slugName + "_adBreakMarkers");
            }
            if (config['skip-offset']) {
                skipOffsets.push(slugName + "_skipOffset");
            }
            if (config['seek-over-ad']) {
                optionRadios.push(slugName + '_optionsRadios1');
            }
        }
        radioControlIds.forEach(function (id) {
            document.getElementById(id).checked = true;
        });
        skipOffsets.forEach(function(id) {
            document.getElementById(id).value = -1;
        });
        optionRadios.forEach(function(id) {
            document.getElementById(id).checked = true;
        });
        this.config.uplynk.contentNotification = true;
        this.config.uplynk.adNotification = true;
        this.config.uplynk.assetMarkers = true;
        this.config.uplynk.adBreakMarkers = true;
        this.config.uplynk.seekOverAd = 'play-all';
        this.config.uplynk.defaultSkipOffset = -1;
    }

    bindControls() {
        const _self = this;

        // Tab switch detection
        const tabs = document.querySelectorAll('#myTab a');
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].onclick = function (e) {
                _self.reset();
                const tabIndex = e.target.dataset.index;
                if (_self.sourceIndex !== tabIndex) {
                    _self.sourceIndex = tabIndex;
                    _self.playerUtil.initPlayer(tabIndex);
                }
            }
        }

        // Seek over ad radio input
        const radios = document.forms[0].optionsRadios;
        for (let i = 0; i < radios.length; i++) {
            radios[i].addEventListener('change', function (e) {
                _self.config.uplynk.seekOverAd = e.srcElement.value;
                _self.playerUtil.initPlayer(_self.sourceIndex);
            });
        }

        // Ads Tab: skip offset number input
        for (let i = 0; i < _self.appConfig.tabs.length; i++) {
            const skipOffset = document.getElementById(Util.slug(_self.appConfig.tabs[i].name) + "_skipOffset");
            if (skipOffset) {
                skipOffset.addEventListener("change", function(e){
                    const skipValue = parseInt(e.target.value);
                    const skipMax = parseInt(e.target.max);
                    if (skipValue < 0){
                        e.target.value = -1;
                    }
                    if (skipValue > skipMax) {
                        e.target.value = skipMax;
                    }
                    _self.config.uplynk.defaultSkipOffset = skipValue || -1;
                    _self.playerUtil.updateSkipOffset(_self.config.uplynk.defaultSkipOffset)
                });
            }
        }

        // All Tabs: checkbox input
        const uplynkCheckboxes = document.querySelectorAll('#myTabContent input[type="checkbox"]');
        for (let i = 0; i < uplynkCheckboxes.length; i++) {
            const box = uplynkCheckboxes[i];
            box.onclick = function (e) {
                _self.config.uplynk[e.target.dataset.uplynkconfig] = e.srcElement.checked;
                _self.playerUtil.initPlayer(_self.sourceIndex);
            };
        }

        // All Tabs: reset buttons
        const resetButtons = document.getElementsByClassName('reset_demo');
        for (let i = 0; i < resetButtons.length; i++) {
            resetButtons[i].onclick = function () {
                _self.reset();
                _self.playerUtil.initPlayer(_self.sourceIndex);
            }
        }

    }

}
