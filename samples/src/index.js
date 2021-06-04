import * as THEOplayer from 'theoplayer';
import {LICENSE} from './constants';

let element = document.querySelector('.theoplayer-container');
let configuration = {
    license: LICENSE,
    libraryLocation: '/node_modules/theoplayer/'
};
let player = new THEOplayer.Player(element, configuration);
player.src = "//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8";
