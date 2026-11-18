import {BaseComponent} from "./BaseComponent";
import {
    getCurrentPlaybackTimeToShow,
    isLiveAndNotSeekable,
    lockControls,
    showControlsTemporary,
    styleProgressBar
} from "./utils/ControlsUtils";

enum SeekDirection {
    NOT_SEEKING,
    BACK,
    FORWARD
}

const SEEK_SPEED = 10;

export class SeekHandler extends BaseComponent {
    private direction: SeekDirection;
    private wasPlayingBeforeSeek: boolean = false;
    private virtualTime: number | undefined = undefined;
    private seekHasStarted: boolean;
    private seekDisplay: HTMLElement;

    constructor(player) {
        super(player);
        this.direction = SeekDirection.NOT_SEEKING;
        this.seekDisplay = <HTMLElement>document.querySelector('.theo-seek-display')
    }

    private keyupEvent = (): void => {
        document.removeEventListener('keyup', this.keyupEvent);
        this.finishVirtualSeek();
    };

    private handleDirection(newDirection: SeekDirection): void {
        if (isLiveAndNotSeekable(this.player)) {
            return;
        }
        if (!this.seekHasStarted) {
            this.virtualTime = this.player.currentTime;
            this.startVirtualSeek(newDirection);
            document.addEventListener('keyup', this.keyupEvent);
            this.seekHasStarted = true;
        }
        this.updateVirtualSeekTime(newDirection);
    }

    private showSeekUI(): void {
        this.player.element.classList.add('theo-seeking');
        lockControls(this.player);
    }

    private hideSeekUI(): void {
        this.player.element.classList.remove('theo-seeking');
        this.seekDisplay.classList.remove('theo-seeking-back');
        this.seekDisplay.classList.remove('seeking-forward');
    }

    reset(): void {
        this.seekHasStarted = false;
        this.virtualTime = undefined;
        this.wasPlayingBeforeSeek = false;
        this.hideSeekUI();
    }

    // a "virtual" seek is only visible in the user interface. Only when it finishes, the value will be passed to the player
    // this reduces the amount of calculations the smart tv has to make
    private startVirtualSeek(newDirection: SeekDirection): void {
        if (!this.player.paused) {
            this.wasPlayingBeforeSeek = true;
            this.player.pause();
        }
        this.showSeekUI();

        if (newDirection === SeekDirection.FORWARD) {
            this.seekDisplay.classList.add('seeking-forward');
        } else {
            this.seekDisplay.classList.add('theo-seeking-back');
        }
    }

    private finishVirtualSeek(): void {
        if (this.virtualTime !== undefined) {
            this.player.currentTime = this.virtualTime;
        }
        if (this.wasPlayingBeforeSeek && !this.player.ended) {
            this.player.play();
        }
        this.reset();
    }

    get is_seeking(): boolean {
        return this.seekHasStarted;
    }

    navigationLeftButton(): boolean {
        this.handleDirection(SeekDirection.BACK);
        return !isLiveAndNotSeekable(this.player);
    }

    navigationUpButton(): boolean {
        return this.is_seeking;
    }

    navigationRightButton(): boolean {
        this.handleDirection(SeekDirection.FORWARD);
        return !isLiveAndNotSeekable(this.player);
    }

    navigationDownButton(): boolean {
        if (!this.player.paused) {
            showControlsTemporary(this.player);
        }
        return this.is_seeking;
    }

    confirmButton(): boolean {
        if (this.is_seeking) {
            this.finishVirtualSeek();
            this.player.play();
            return true;
        }
        return false;
    }

    returnButton(): boolean {
        if (this.is_seeking) {
            this.reset();
            this.player.element.classList.remove('seeking');
            this.player.play();
            return true;
        }
        return false;
    }

    mediaPlayPauseButton(): boolean {
        if (this.is_seeking) {
            this.finishVirtualSeek();
            this.player.play();
            return true;
        }
        return false;
    }

    protected doActivate(): void {

    }

    protected doDeactivate(): void {

    }

    private updateVirtualSeekTime(newDirection: SeekDirection): void {
        const seekableRanges = this.player.seekable.length;
        if (!seekableRanges) {
            return;
        }

        const seekable = {
            start: this.player.seekable.start(0),
            end: this.player.seekable.end(seekableRanges - 1)
        };

        const seekRate = (newDirection === SeekDirection.FORWARD) ? SEEK_SPEED : -SEEK_SPEED;
        let tempVirtualTime = this.virtualTime + seekRate;

        // limit seek to stream boundaries
        if (tempVirtualTime < seekable.start) {
            tempVirtualTime = seekable.start;
        } else if (tempVirtualTime > seekable.end) {
            tempVirtualTime = seekable.end;
        }

        this.virtualTime = tempVirtualTime;

        styleProgressBar(this.virtualTime, this.player, <HTMLElement>document.querySelector('.theo-current-progress'));
        document.querySelector('.theo-seek-display strong').textContent = getCurrentPlaybackTimeToShow(this.virtualTime, this.player);
    }

    unload(): void {
        this.reset();
        document.removeEventListener('keyup', this.keyupEvent);
    }
}