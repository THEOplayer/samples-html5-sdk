import {TopComponentManager} from './TopComponentManager';
import {TVContainerBottom} from "./TVContainerBottom";
import {TVContainerTop} from "./TVContainerTop";
import {UIManager} from "./UIManager";
import {Component} from "./BaseComponent";

let keyCodes = {
    NAVIGATION_LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    CONFIRM: 13,
    // tizen
    RETURN: 10009,
    EXIT: 10182,
    MEDIAPLAYPAUSE: 10252
};


export class ExampleUI {
    private _uiManager: UIManager;
    private _tvContainerManager: TopComponentManager;
    private _tvContainerBottom: Component;
    private _player;

    constructor (player) {
        this._uiManager = new UIManager(player);
        this._player = player;

        this._tvContainerManager = new TopComponentManager(player);
        this._tvContainerManager.activate();


        this._tvContainerManager.registerComponent(new TVContainerTop(player));

        const tvContainerBottom = new TVContainerBottom(player);
        this._tvContainerManager.registerComponent(tvContainerBottom);
        this._tvContainerManager.setActiveComponent(tvContainerBottom);

        this._tvContainerBottom = tvContainerBottom;

        if (typeof window.tizen !== "undefined") {
            window.tizen.tvinputdevice.registerKey('MediaPlayPause'); // allow MediaPlayPause button
        }
        document.addEventListener('keydown', this.keyPress);

        player.addEventListener('sourcechange', this.reset);
        player.addEventListener('destroy', this.unload);
    }

    // react on player.destroy()
    private unload = (): void => {
        this._tvContainerManager.unload();

        if (typeof window.tizen !== "undefined") {
            window.tizen.tvinputdevice.registerKey('MediaPlayPause'); // allow MediaPlayPause button
        }
        document.removeEventListener('keydown', this.keyPress);

        this._player.removeEventListener('sourcechange', this.reset);
        this._player.addEventListener('destroy', this.unload);
    };

    private readonly reset = (): void => {
        this._tvContainerManager.reset();
        this._tvContainerManager.setActiveComponent(this._tvContainerBottom)
    };

    private keyPress = (event) => {
        switch (event.keyCode) {
            case keyCodes.NAVIGATION_LEFT:
                this._tvContainerManager.navigationLeftButton();
                break;
            case keyCodes.UP:
                this._tvContainerManager.navigationUpButton();
                break;
            case keyCodes.RIGHT:
                this._tvContainerManager.navigationRightButton();
                break;
            case keyCodes.DOWN:
                this._tvContainerManager.navigationDownButton();
                break;
            case keyCodes.CONFIRM:
                this._tvContainerManager.confirmButton();
                break;
            case keyCodes.EXIT:
                break;
            case keyCodes.RETURN:
                this._tvContainerManager.returnButton();
                break;
            case keyCodes.MEDIAPLAYPAUSE:
                this._tvContainerManager.mediaPlayPauseButton();
                return false;
        }
    };

}


