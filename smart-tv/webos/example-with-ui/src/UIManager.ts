import {numberToFormat} from "./utils/TimeUtils";
import {swapClasses} from "./utils/DOMUtils";
import {
    getCurrentPlaybackTimeToShow,
    lockControls,
    showControlsTemporary,
    styleProgressBar
} from "./utils/ControlsUtils";

enum EventType {
    PLAY = 'play',
    PAUSE = 'pause'
}

export class UIManager {
    private player;
    private spinnerIsShowing: boolean;
    private hasStarted = false;
    private playPauseButton: HTMLElement;
    private currentTimeDisplay: HTMLElement;
    private progressDisplay: HTMLElement;
    private durationDisplay: HTMLElement;

    constructor (player) {
        this.player = player;
        this.hasStarted = false;
        this.playPauseButton = <HTMLElement>document.querySelector('.theo-play-pause-button');
        this.currentTimeDisplay = <HTMLElement>document.querySelector('.theo-current-time');
        this.progressDisplay = <HTMLElement>document.querySelector('.theo-current-progress');
        this.durationDisplay = <HTMLElement>document.querySelector('.theo-duration');
        this.addEventListeners();
    }

    addEventListeners() {
        this.player.addEventListener(['playing', 'waiting'], this.removeBigPlayButton);
        this.player.addEventListener('durationchange', this.updateDuration);
        this.player.addEventListener('timeupdate', this.updateCurrentTime);
        this.player.addEventListener(['seeking', 'waiting'], this.startSpinner);
        this.player.addEventListener(['seeked', 'playing', 'canplay'], this.stopSpinner);
        this.player.addEventListener(['play', 'pause'], this.updateUI);
        this.player.addEventListener('sourcechange', this.reset);
        this.player.addEventListener('destroy', this.unload);
    }

    private readonly removeBigPlayButton = () => {
        if (!this.hasStarted) {
            this.player.element.classList.add('theo-has-started');
            this.hasStarted = true;
        }
    };

    private readonly updateUI = (event: Event) => {
        this.player.element.classList.remove('hide-controls');
        this.updatePlayPauseButton(event.type);
    };

    private readonly startSpinner = () => {
        if (!this.spinnerIsShowing) {
            this.spinnerIsShowing = true;
            this.player.element.classList.add('theo-show-spinner');
        }
    };

    private readonly stopSpinner = () => {
        if (this.spinnerIsShowing) {
            this.spinnerIsShowing = false;
            this.player.element.classList.remove('theo-show-spinner');
        }
    };

    private readonly updateCurrentTime = () => {
        if (isNaN(this.player.duration)) {
            return;
        }

        styleProgressBar(
            this.player.currentTime,
            this.player,
            this.progressDisplay
        );

        this.currentTimeDisplay.textContent = getCurrentPlaybackTimeToShow(
            this.player.currentTime,
            this.player
        );
    };

    private updatePlayPauseButton(type: string) {
        if (type === EventType.PAUSE) {
            lockControls(this.player);
            swapClasses(this.player.element, 'theo-playing', 'theo-paused');
            swapClasses(this.playPauseButton, 'theo-pause-button', 'theo-play-button');
        } else {
            showControlsTemporary(this.player);
            swapClasses(this.player.element, 'theo-paused', 'theo-playing');
            swapClasses(this.playPauseButton, 'theo-play-button', 'theo-pause-button');
        }
    }

    private readonly updateDuration = () => {
        if (isNaN(this.player.duration)) {
            return;
        }

        if (this.player.duration === Infinity) {
            this.durationDisplay.textContent = 'Live';
            this.player.element.classList.add('theo-live');
        } else {
            this.durationDisplay.textContent = numberToFormat(this.player.duration);
        }
    };

    private reset = (): void => {
        this.hasStarted = false;
        this.player.element.classList.remove('theo-live');
        swapClasses(this.player.element, 'theo-playing', 'theo-paused');
        swapClasses(this.playPauseButton, 'theo-play-button', 'theo-pause-button');
        this.player.element.classList.remove('theo-has-started');
        this.player.element.classList.add('hide-controls');

        if (this.spinnerIsShowing) {
            this.spinnerIsShowing = false;
            this.stopSpinner();
        }

        this.currentTimeDisplay.textContent = '';
        this.durationDisplay.textContent = '';

        this.progressDisplay.style.width = '0px';
    };

    private unload = (): void => {
        this.player.removeEventListener(['playing', 'waiting'], this.removeBigPlayButton);
        this.player.removeEventListener('durationchange', this.updateDuration);
        this.player.removeEventListener('timeupdate', this.updateCurrentTime);
        this.player.removeEventListener(['seeking', 'waiting'], this.startSpinner);
        this.player.removeEventListener(['seeked', 'playing', 'canplay'], this.stopSpinner);
        this.player.removeEventListener(['play', 'pause'], this.updateUI);
        this.player.removeEventListener('sourcechange', this.reset);
        this.player.addEventListener('destroy', this.unload);
    };
}