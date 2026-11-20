import * as THEOplayer from 'theoplayer';
import {LICENSE} from '../../../util/constants';

// Parcel's CSS transformer cannot parse ui.css, so load the copied stylesheet at runtime.
const stylesheet = document.createElement('link');
stylesheet.rel = 'stylesheet';
stylesheet.href = '/vendor/theoplayer/ui.css';
document.head.appendChild(stylesheet);

const element = document.getElementById('my-player');
const configuration = {
    license: LICENSE,
    libraryLocation: '/vendor/theoplayer/'
};

const player = new THEOplayer.Player(element, configuration);

player.src = "https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8";

