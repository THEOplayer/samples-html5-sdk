/* eslint-disable no-undef */
import { Log } from '@lightningjs/sdk';

let player = undefined;
let videoWrapper = undefined;

const THEOplayerLibraryLocation = '/static/THEOplayer';
const THEOplayerLibrary = `${THEOplayerLibraryLocation}/THEOplayer.chromeless.js`;
const THEOplayerCSS = `${THEOplayerLibraryLocation}/ui.css`;

const THEOplayerPlugin = {
    async initLibrary() {
        await initLibrary();
    },
    createPlayer() {
        if (player === undefined) {
            player = new THEOplayer.Player(videoWrapper, {
                libraryLocation: THEOplayerLibraryLocation
            });
        }
        return player;
    },
    version() {
        return THEOplayer.version;
    }
};

const initLibrary = async () => {
    if (videoWrapper !== undefined) {
        // Already initialized
        return;
    }
    videoWrapper = setupVideoWrapper();
    const scriptEl = document.createElement('script');
    scriptEl.src = THEOplayerLibrary;
    document.body.appendChild(scriptEl);
    await new Promise((resolve, reject) => {
        scriptEl.onload = () => {
            Log.info('Successfully loaded THEOplayer library', THEOplayer.version);
            resolve();
        };
        scriptEl.onerror = () => {
            Log.error('Failed to load THEOplayer library');
            reject();
        };
    });
};

const setupVideoWrapper = () => {
    let cssNode = document.createElement('link');
    cssNode.type = 'text/css';
    cssNode.rel = 'stylesheet';
    cssNode.href = THEOplayerCSS;
    document.head.appendChild(cssNode);

    let wrapper = document.getElementById('theoplayer-wrapper');
    if (!wrapper) {
        wrapper = document.createElement('div');
        wrapper.setAttribute('id', 'theoplayer-wrapper');
        document.body.appendChild(wrapper);
    }
    return wrapper;
};

export default THEOplayerPlugin;
