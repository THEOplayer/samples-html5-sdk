import {BaseComponent, Component} from "./BaseComponent";
import {SeekHandler} from "./SeekHandler";

export class TVContainerBottom extends BaseComponent{
    private bottomControlBar : HTMLElement;
    private seekhandler: Component;

    constructor (player) {
        super(player, true);

        const seekHandler = new SeekHandler(player);
        this.registerComponent(seekHandler);
        this.setActiveComponent(seekHandler);

        this.seekhandler = seekHandler;
        this.bottomControlBar = <HTMLElement>document.querySelector('.theo-bottom-control-bar');
    }

    confirmButton () : boolean {
        if (!super.confirmButton()) {
            if (this.player.paused) {
                this.player.play();
            } else {
                this.player.pause();
            }
        }

        return true;
    }

    protected doActivate(): void {
        this.bottomControlBar.classList.add('activated')
    }

    protected doDeactivate(): void {
        this.bottomControlBar.classList.remove('activated')
    }

    reset(): void {
        this.activate();
        this.setActiveComponent(this.seekhandler);
    }
}
