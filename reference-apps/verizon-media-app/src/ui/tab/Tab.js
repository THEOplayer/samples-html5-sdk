import {TabTitle} from "./TabTitle";
import {TabContent} from "./TabContent";

export class Tab {
    static createAll(tabs) {
        for (let i = 0; i < tabs.length; i++) {
            this.insertTab(tabs[i], i);
        }
    }
    static insertTab(tab, index) {
        // tab title
        const containerNode = document.querySelector('#myTab');
        const tabTitleNode = TabTitle.createNode(tab, index);
        containerNode.appendChild(tabTitleNode);

        // tab content
        const containerContentNode = document.querySelector('#myTabContent');
        const tabContentNode = TabContent.createNode(tab, index);
        containerContentNode.appendChild(tabContentNode);
    }
    static destroyAll() {
        document.querySelector('#myTab').innerHTML = '';
        document.querySelector('#myTabContent').innerHTML = '';
    }
}