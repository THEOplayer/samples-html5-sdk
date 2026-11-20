import {BaseComponent} from "../BaseComponent";

export class TrackMenuItem extends BaseComponent {
    private _track;
    private DOM: HTMLElement;

    constructor(player, track) {
        super(player, true);
        this._track = track;
        this.init();
    }

    init(): void {
        let element = document.createElement('div');
        element.className = 'theo-menu-item';
        let stringToShow = this._track.label;

        if (this._track.language) {
            stringToShow += ` (${this._track.language})`;
        }

        if (!stringToShow) {
            stringToShow = `Track ${this._track.uid}`; // we do not know anything about this track
        }

        element.textContent = stringToShow;
        this.DOM = element;
    }

    protected doActivate(): void {
        this.DOM.classList.add('active-item');
    }

    protected doDeactivate(): void {
        this.DOM.classList.remove('active-item');
    }

    node(): HTMLElement {
        return this.DOM;
    }

    get track() {
        return this._track;
    }
}