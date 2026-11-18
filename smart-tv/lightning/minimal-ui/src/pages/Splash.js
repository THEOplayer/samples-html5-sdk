import { Lightning, Router } from '@lightningjs/sdk';
import THEOplayerPlugin from '../utils/THEOplayer';

const MIN_SPLASH_TIME = 500;

export default class Splash extends Lightning.Component {
    static _template() {
        return {
            rect: true,
            w: 1920,
            h: 1080,
            color: 0xff00000000,
            Logo: {
                alpha: 1,
                mount: 0.5,
                x: 960,
                y: 540,
                // eslint-disable-next-line no-undef
                texture: { type: lng.textures.ImageTexture, src: 'static/images/ic_theo_logo.png' }
            }
        };
    }

    async _enable() {
        // wait until the THEOplayer library is loaded
        const loadStart = new Date().getTime();
        if (!this.player) {
            this.player = await THEOplayerPlugin.initLibrary();
        }
        const loadEnd = new Date().getTime();
        const remainingSplash = Math.max(0, MIN_SPLASH_TIME - (loadEnd - loadStart));

        setTimeout(() => {
            this._fadeOut(() => Router.resume());
        }, remainingSplash);
    }

    _fadeOut(onFinish) {
        const fadeOut = this.tag('Logo').animation({
            duration: 0.5,
            stopMethod: 'immediate',
            actions: [{ p: 'alpha', v: { sm: 0.5, 0: 1, 1: 0 } }]
        });
        fadeOut.on('finish', onFinish);
        fadeOut.start();
    }
}
