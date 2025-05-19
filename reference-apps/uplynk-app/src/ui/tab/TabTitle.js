import {Util} from "../../Util";

export class TabTitle {
    constructor(tab, index) {
        this.tab = tab;
        this.index = index;
    }
    getNode() {
        const slugName = Util.slug(this.tab.name);
        const liNode = document.createElement('li');
        const aNode = document.createElement('a');
        aNode.className = "nav-link";
        if (this.index == 0) {
            aNode.classList.add('active');
        }
        aNode.id = slugName + "-tab";
        aNode.setAttribute('data-toggle', 'tab');
        aNode.setAttribute('aria-controls', slugName);
        aNode.setAttribute('role', "tab");
        aNode.setAttribute('aria-selected', (this.index == 0) ? "true" : "false");
        aNode.href = "#"+slugName;
        aNode.setAttribute('data-index', this.index);
        aNode.textContent = this.tab.name.toUpperCase();
        liNode.className = "nav-item";
        liNode.appendChild(aNode);
        return liNode;
    }
    static createNode(tab, index) {
        const tabTitle = new TabTitle(tab, index);
        return tabTitle.getNode();
    }
}