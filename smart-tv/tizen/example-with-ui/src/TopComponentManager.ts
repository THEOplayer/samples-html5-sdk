/// <reference path="Tizen.d.ts" />

/*global tizen*/
import {selectNextItem, selectPreviousItem} from "./utils/NavigationUtils";
import {showControlsTemporarySecurely} from "./utils/ControlsUtils";
import {BaseComponent} from "./BaseComponent";

export class TopComponentManager extends BaseComponent {

    constructor(player) {
        super(player);
    }

    navigationLeftButton(): boolean {
        if (!super.navigationLeftButton()) {
            showControlsTemporarySecurely(this.player);
        }
        return false;
    }

    navigationUpButton(): boolean {
        if (!super.navigationUpButton()) {
            const previousItem = selectPreviousItem(this.activeComponent, this.components);
            if (previousItem) {
                this.setActiveComponent(previousItem);
            }
            showControlsTemporarySecurely(this.player);
        }
        return true;
    }

    navigationRightButton(): boolean {
        if (!super.navigationRightButton()) {
            showControlsTemporarySecurely(this.player);
        }
        return false;
    }

    navigationDownButton(): boolean {
        if (!super.navigationDownButton()) {
            const nextItem = selectNextItem(this.activeComponent, this.components);
            if (nextItem) {
                this.setActiveComponent(nextItem);
            }
            showControlsTemporarySecurely(this.player);
        }
        return true;
    }

    mediaPlayPauseButton(): boolean {
        if (!this.activeComponent.mediaPlayPauseButton()) {
            if (this.player.paused) {
                this.player.play();
            } else {
                this.player.pause();
            }
        }

        return true;
    }

    protected doActivate(): void {

    }

    protected doDeactivate(): void {

    }
}