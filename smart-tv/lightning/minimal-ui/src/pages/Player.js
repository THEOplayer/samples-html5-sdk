import { Lightning, Log, Router } from '@lightningjs/sdk';
import THEOplayerPlugin from '../utils/THEOplayer';
import PlayerUI from '../components/PlayerUI';
import SOURCES from '../../static/sources.json';

export default class Player extends Lightning.Component {
    static _template() {
        return {
            PlayerUI: { type: PlayerUI, visible: true }
        };
    }

    async _enable() {
        Log.info('Player:_enable');
        if (!this.player) {
            this.player = await THEOplayerPlugin.createPlayer();
            this.tag('PlayerUI').setupListeners(this.player);
        }

        if (this.source) {
            this.player.source = this.source;
            this.player.play();
        }
    }

    _disable() {
        Log.info('Player:_disable');
        if (this.player) {
            this.player.stop();
        }
    }

    _handleKey(event) {
        switch (event.key) {
            case 'Escape':
            case 'Back':
                Router.back();
                break;
        }
    }

    set params(args) {
        const { assetId } = args;
        if (assetId) {
            this.source = SOURCES[parseInt(assetId)].source;
        }
    }

    _getFocused() {
        return this.tag('PlayerUI');
    }

    $onPlayPause() {
        if (!this.player) {
            return;
        }
        if (this.player.paused) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }
}
