import {Util} from "../../Util";

export class TabContent {
    constructor(tab, index) {
        this.tab = tab;
        this.index = index;
    }
    getNode() {
        const slugName = Util.slug(this.tab.name);

        const div1 = document.createElement('div');
        div1.className = "tab-pane fade";
        if (this.index == 0) {
            div1.classList.add("show");
            div1.classList.add("active");
        }
        div1.id = slugName;
        div1.setAttribute('role', 'tabpanel');
        div1.setAttribute('aria-labelledby', slugName + '-tab');

        const div11 = document.createElement('div');
        div11.className = "form p-3";
        div1.appendChild(div11);

        const div111 = document.createElement('div');
        div111.className = 'float-right mt-1';
        div111.innerHTML = '<button type="button" class="btn btn-default reset_demo"><i class="fas fa-sync-alt mr-2"></i></button>';
        div11.appendChild(div111);
        const div111b = document.createElement('div');
        div111b.className = 'float-right mt-1';
        div111b.innerHTML = '<button type="button" class="btn btn-default edit_demo" data-toggle="modal" data-target="#editAppModal"><i class="fas fa-cog mr-2"></i></button>';
        div11.appendChild(div111b);
        const div111c = document.createElement('div');
        div111c.className = 'float-right mt-1';
        div111c.innerHTML = '<a href="https://github.com/THEOplayer/samples-html5-sdk/tree/master/reference-apps/verizon-media-app" target="_blank" type="button" class="btn btn-default"><i class="fab fa-github mr-2"></i></a>';
        div11.appendChild(div111c);

        if (this.tab.config && this.tab.config.general) {
            const general = this.tab.config.general;
            const p112 = document.createElement('p');
            p112.className = 'text-muted mt-2';
            p112.setAttribute('data-local', 'general');
            p112.textContent = 'General';
            div11.appendChild(p112);
            if (general.indexOf('coming-up-notification') > -1) {
                const div113 = document.createElement('div');
                div113.className = "switch";
                div113.innerHTML = '<label><input id="'+slugName+'_contentNotification" type="checkbox" data-verizonconfig="contentNotification" checked><span data-local="cun">Coming up notification</span></label>';
                div11.appendChild(div113);
            }
            if (general.indexOf('ad-notification') > -1) {
                const div114 = document.createElement('div');
                div114.className = "switch";
                div114.innerHTML = '<label><input id="'+slugName+'_adNotification" type="checkbox" data-verizonconfig="adNotification" checked><span data-local="an">Ad notification</span></label>';
                div11.appendChild(div114);
            }
            if (general.indexOf('show-asset-markers') > -1) {
                const div115 = document.createElement('div');
                div115.className = "switch";
                div115.innerHTML = '<label><input id="'+slugName+'_assetMarkers" type="checkbox" data-verizonconfig="assetMarkers" checked><span data-local="am">Show asset markers</span></label>';
                div11.appendChild(div115);
            }
            if (general.indexOf('show-ad-break-markers') > -1) {
                const div116 = document.createElement('div');
                div116.className = "switch";
                div116.innerHTML = '<label><input id="'+slugName+'_adBreakMarkers" type="checkbox" data-verizonconfig="adBreakMarkers" checked><span data-local="abm">Show ad break markers</span></label>';
                div11.appendChild(div116);
            }
        }
        if (this.tab.config && this.tab.config['skip-offset']) {
            const div117 = document.createElement('div');
            div117.className = "form";
            div117.innerHTML = '<div class="form-group"><label for="'+slugName+'_skipOffset" data-local="so">Skip Offset</label><input type="number" class="form-control" id="'+slugName+'_skipOffset" placeholder="'+this.tab.config['skip-offset']+'" min="-1" max="15" ></div>';
            div11.appendChild(div117);
        }
        if (this.tab.config && this.tab.config['seek-over-ad']) {
            const seekType = this.tab.config['seek-over-ad'];
            const p118 = document.createElement('p');
            p118.className = 'text-muted mt-2';
            p118.setAttribute('data-local', 'soa');
            p118.textContent = 'Seek over Ad';
            div11.appendChild(p118);

            const f119 = document.createElement('form');
            f119.innerHTML = '<div class="form-group pt-0">\n' +
                '                                    <div class="radio form-check-inline">\n' +
                '                                        <label>\n' +
                '                                            <input type="radio" name="optionsRadios" id="'+slugName+'_optionsRadios1"\n' +
                '                                                value="play-all" checked>\n' +
                '                                             <span data-local="pa">Play all</span>\n' +
                '                                        </label>\n' +
                '                                    </div>\n' +
                '                                    <div class="radio form-check-inline">\n' +
                '                                        <label>\n' +
                '                                            <input type="radio" name="optionsRadios" id="'+slugName+'_optionsRadios2"\n' +
                '                                                value="play-none">\n' +
                '                                            <span data-local="pn">Play none</span>\n' +
                '                                        </label>\n' +
                '                                    </div>\n' +
                '                                    <div class="radio form-check-inline">\n' +
                '                                        <label>\n' +
                '                                            <input type="radio" name="optionsRadios" id="'+slugName+'_optionsRadios3"\n' +
                '                                                value="play-last">\n' +
                '                                            <span data-local="pl">Play last</span>\n' +
                '                                        </label>\n' +
                '                                    </div>\n' +
                '                                </div>';
            div11.appendChild(f119);
        }

        if (this.tab.config && this.tab.config['queue']) {
            const button11 = document.createElement('button');
            button11.className = "btn btn-default w-100 text-left";
            button11.setAttribute('data-toggle', 'collapse');
            button11.href = "#playlist_" + slugName;
            button11.textContent = 'Queue';
            button11.setAttribute('aria-expanded', 'true');
            button11.setAttribute('aria-controls', 'playlist_' + slugName);
            div1.appendChild(button11);

            const div12 = document.createElement('div');
            div12.className = "collapse show";
            div12.id = "playlist_" + slugName;
            div1.appendChild(div12);
        }

        return div1;
    }
    static createNode(tab, index) {
        const tabContent = new TabContent(tab, index);
        return tabContent.getNode();
    }
}