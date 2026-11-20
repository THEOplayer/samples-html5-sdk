/* eslint-disable no-undef */
import { Log } from '@lightningjs/sdk';

let player = undefined;
let videoWrapper = undefined;

// Without a license, the player only plays on localhost. Get a license on THEOportal.
const license = '';

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
                license,
                libraryLocation: THEOplayerLibraryLocation
            });
            if (!license && location.hostname !== 'localhost') {
                showLicenseBanner();
            }
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

const showLicenseBanner = () => {
    const banner = document.createElement('div');
    banner.textContent =
        'This page is not served from localhost, so OptiView Player needs a license. ' +
        'Set it in src/utils/THEOplayer.js. Get a license on THEOportal (portal.theoplayer.com).';
    Object.assign(banner.style, {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '10',
        padding: '12px 16px',
        background: '#fff3cd',
        color: '#664d03',
        font: '16px sans-serif'
    });
    document.body.appendChild(banner);
};

export default THEOplayerPlugin;
