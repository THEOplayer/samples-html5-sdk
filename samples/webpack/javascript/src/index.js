import * as THEOplayer from 'theoplayer';
import {LICENSE} from '../../../src/constants';

let element = document.querySelector('.theoplayer-container');
let configuration = {
    license: LICENSE,
    libraryLocation: '/vendor/theoplayer/'
};
let player = new THEOplayer.Player(element, configuration);
player.src = "//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8";
