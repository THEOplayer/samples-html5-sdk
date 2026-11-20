import {selectNextItem, selectPreviousItem} from "./utils/NavigationUtils";
import {TracksContext} from "./TracksComponents";
import {BaseComponent} from "./BaseComponent";

export class TVContainerTop extends BaseComponent {
    private topControlBar: HTMLElement;
    private hasStarted: boolean;

    constructor(player) {
        super(player);
        this.topControlBar = <HTMLElement>document.querySelector('.theo-top-control-bar');
        this.hasStarted = false;
        this.init();
    }

    private readonly setFocusable = (): void => {
        if (this.hasStarted) {
            return;
        }

        this.hasStarted = true;
        this.show();
    };

    isFocusable(): boolean {
        return this.components.filter((component) => component.isFocusable()).length > 0 && this.hasStarted;
    }

    private init(): void {
        this.components.push(new TracksContext(this.player, { // texttracks
            createOffOption: true,
            icon: document.querySelector('.theo-icon-subtitles'),
            trackAPI: this.player.textTracks
        }));
        this.components.push(new TracksContext(this.player, { // audio tracks
            createOffOption: false,
            icon: document.querySelector('.theo-icon-audio'),
            trackAPI: this.player.audioTracks
        }));

        this.player.addEventListener('playing', this.setFocusable);
    }

    navigationLeftButton(): boolean {
        if (!super.navigationLeftButton()) {
            const previousItem = selectPreviousItem(this.activeComponent, this.components);
            if (previousItem) {
                this.activate();
                this.setActiveComponent(previousItem);
                return true;
            }
        }

        return false;
    }

    navigationRightButton(): boolean {
        if (!super.navigationRightButton()) {
            const nextItem = selectNextItem(this.activeComponent, this.components);
            if (nextItem) {
                this.activate();
                this.setActiveComponent(nextItem);
                return true;
            }
        }

        return false;
    }

    protected doActivate(): void {
        this.topControlBar.classList.add('activated');

        if (!this.activeComponent) {
            for (const component of this.components) {
                if (component.isFocusable()) {
                    this.setActiveComponent(component);
                    break;
                }
            }
        }

        this.activeComponent.activate();
    }

    protected doDeactivate(): void {
        this.topControlBar.classList.remove('activated');

        if (this.activeComponent) {
            this.activeComponent.deactivate();
        }
    }

    private show(): void {
        this.topControlBar.classList.remove('theo-hidden');
    }

    private hide(): void {
        this.topControlBar.classList.add('theo-hidden');
    }

    reset(): void {
        super.reset();
        this.hide();
        this.hasStarted = false;
    }

    unload(): void {
        this.reset();
        this.player.removeEventListener('playing', this.setFocusable);
    }
}