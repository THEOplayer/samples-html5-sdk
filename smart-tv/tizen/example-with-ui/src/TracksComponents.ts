import {lockControls, showControlsTemporaryIfNotPaused} from "./utils/ControlsUtils";
import {BaseComponent} from "./BaseComponent";
import {MenuConfig} from "./menu/MenuConfig";
import {TrackMenuItem} from "./menu/TrackMenuItem";
import {selectNextItem, selectPreviousItem} from "./utils/NavigationUtils";

export class TracksContext extends BaseComponent {
    private icon : HTMLElement;
    private trackAPI;
    private menuRight: HTMLElement;

    constructor (player, menuConfig: MenuConfig) {
        super(player);

        this.icon = menuConfig.icon;
        this.trackAPI = menuConfig.trackAPI;
        this.menuRight = <HTMLElement>document.querySelector('.theo-menu-right');

        this.hide();

        if (menuConfig.createOffOption) {
            let offMenuItem = new TrackMenuItem(this.player, { // mock-object
                enabled: true, // for audio
                mode: 'showing', // for texttracks

                // readable
                label: 'Off',
                language: ''
            });
            this.components.push(offMenuItem);
        }
        this.manageOptions();
    }

    protected doActivate(): void {
        this.icon.classList.add('focused');
        this.menuRight.innerHTML = '';

        this.components.forEach((track) => {
            this.menuRight.appendChild((track as TrackMenuItem).node());
        });
    }

    protected doDeactivate(): void {
        this.icon.classList.remove('focused');
        showControlsTemporaryIfNotPaused(this.player);
    }

    private show(): void {
        this.icon.style.display = 'block';
        this.setIsFocusable(true);
    }

    private hide(): void {
        this.icon.style.display = 'none';
        this.setIsFocusable(false);
    }

    confirmButton(): boolean {
        if (!this.activeComponent) {
            this.setActiveComponent(this.components[0]);
            this.player.element.classList.add('menu-opened');
            this.menuRight.classList.add('opened');
            lockControls(this.player);
            return true;
        }

        this.setTracksToHidden();
        showControlsTemporaryIfNotPaused(this.player);
        this.menuRight.classList.remove('opened');
        this.player.element.classList.remove('menu-opened');

        const activeComponent: TrackMenuItem = this.activeComponent as TrackMenuItem;
        if (activeComponent.track.mode) {
            activeComponent.track.mode = 'showing';
        } else {
            activeComponent.track.enabled = true;
        }

        super.confirmButton();
        this.setActiveComponent(undefined);
        return true;
    }

    navigationLeftButton (): boolean {
        if (this.activeComponent) {
            // menu is opened
            return true;
        }

        return super.navigationLeftButton();
    }

    navigationRightButton (): boolean {
        if (this.activeComponent) {
            // menu is opened
            return true;
        }

        return super.navigationRightButton();
    }

    navigationUpButton(): boolean {
        if (this.activeComponent) {
            const previousItem = selectPreviousItem(this.activeComponent, this.components);
            if (previousItem) {
                this.setActiveComponent(previousItem);
                return true;
            }
        }

        return false;
    }

    navigationDownButton(): boolean {
        if (this.activeComponent) {
            const nextItem = selectNextItem(this.activeComponent, this.components);
            if (nextItem) {
                this.setActiveComponent(nextItem);
                return true;
            }
        }

        return false;
    }

    returnButton () : boolean {
        if (!this.activeComponent) {
            return false;
        }

        this.setActiveComponent(undefined);
        showControlsTemporaryIfNotPaused(this.player);
        this.menuRight.classList.remove('opened');
        this.player.element.classList.remove('menu-opened');

        return true;
    }

    private manageOptions(): void {
        this.trackAPI.forEach(this.addComponentByTrack); // if there are already tracks available
        this.trackAPI.addEventListener('addtrack', this.mapFromEventToAddComponentByTrack);
        this.trackAPI.addEventListener('removetrack', this.removeComponentByTrackEvent);
    }

    private readonly mapFromEventToAddComponentByTrack = (trackEvent) => this.addComponentByTrack(trackEvent.track);

    private readonly addComponentByTrack = (track): void => {
        let trackObject = new TrackMenuItem(this.player, track);
        this.components.push(trackObject);

        if (this.components.length === 2) {
            this.show();
            this.setIsFocusable(true);

            if (track.mode === 'showing' || track.enabled === true) {
                this.setActiveComponent(trackObject);
            }
        }
    };

    private readonly removeComponentByTrackEvent = (trackEvent): void => {
        let track = trackEvent.track;
        for (let trackIndex in this.components) {
            let itemMenuTrackToRemove = this.components[trackIndex] as TrackMenuItem;

            if (track === itemMenuTrackToRemove.track) {
                this.components.splice(+trackIndex, 1);
                break;
            }
        }

        if (this.components.length > 2) {
            this.setIsFocusable(false);
            this.hide();
        }
    };

    private setTracksToHidden(): void {
        this.components.forEach((component: TrackMenuItem) => {
            if (component.track.mode === 'showing') {
                if (component.track.mode) {
                    component.track.mode = 'hidden';
                } else {
                    component.track.enabled = false;
                }
            }
        });
    }

    reset(): void {
        super.reset();
        this.setActiveComponent(undefined);
    }

    unload(): void {
        this.reset();

        this.trackAPI.removeEventListener('addtrack', this.mapFromEventToAddComponentByTrack);
        this.trackAPI.removeEventListener('removetrack', this.removeComponentByTrackEvent);
    }

}
