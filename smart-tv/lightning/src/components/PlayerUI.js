import { Lightning, Utils, Log } from '@lightningjs/sdk';

const PLAYER_EVENTS = [
    'loadstart',
    'loadedmetadata',
    'loadeddata',
    'error',
    'canplay',
    'play',
    'playing',
    'pause',
    'encrypted',
    'contentprotectionsuccess',
    'contentprotectionerror'
];

export default class PlayerControls extends Lightning.Component {
    static _template() {
        return {
            PlayPauseButton: {
                mountX: 0.5,
                mountY: 0.5,
                x: 0.5 * 1920,
                y: 0.5 * 1080,
                w: 200,
                h: 200,
                // eslint-disable-next-line no-undef
                texture: lng.Tools.getSvgTexture(Utils.asset('images/button.svg'), 300, 300)
            },
            Label: {
                x: 960,
                y: 540,
                mount: 0.5,
                text: { fontColor: 0xffffffff, fontSize: 32 }
            }
        };
    }

    _enable() {
        this._setState('LoadingState');
    }

    _handleEnter() {
        this.fireAncestors('$onPlayPause', '');
    }

    setupListeners(player) {
        for (let eventName of PLAYER_EVENTS) {
            player.addEventListener(eventName, e => {
                Log.info(eventName, e);
                switch (eventName) {
                    case 'loadstart':
                        this._setState('LoadingState');
                        break;
                    case 'playing':
                        this._setState('PlayState');
                        break;
                    case 'error':
                        this._setState('ErrorState');
                        break;
                    case 'pause':
                        this._setState('PauseState');
                        break;
                }
            });
        }
    }

    showPlayButton() {
        this.tag('PlayPauseButton').patch({ alpha: 1.0 });
    }

    hidePlayButton() {
        this.tag('PlayPauseButton').patch({ alpha: 0.0 });
    }

    showMessage(msg) {
        this.hidePlayButton();
        this.tag('Label').patch({ text: { text: msg } });
    }

    hideMessage() {
        this.tag('Label').patch({ text: { text: '' } });
    }

    static _states() {
        return [
            class PauseState extends this {
                $enter() {
                    this.showPlayButton();
                }
                $exit() {
                    this.hidePlayButton();
                }
            },
            class PlayState extends this {
                $enter() {
                    this.hideMessage();
                }
            },
            class LoadingState extends this {
                $enter() {
                    this.showMessage('Loading ...');
                }
            },
            class ErrorState extends this {
                $enter() {
                    this.showMessage('Error!');
                }
            }
        ];
    }
}
