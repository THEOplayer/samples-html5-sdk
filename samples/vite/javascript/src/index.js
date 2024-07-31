import * as THEOplayer from 'theoplayer';
import {LICENSE} from '../../../util/constants';

const element = document.getElementById('my-player');
const configuration = {
    license: LICENSE,
    libraryLocation: `${import.meta.env.BASE_URL}vendor/theoplayer/`
};

const player = new THEOplayer.Player(element, configuration);

player.src = '//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8';
