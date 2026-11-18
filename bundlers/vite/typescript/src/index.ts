import * as THEOplayer from 'theoplayer';
import {LICENSE} from '../../../util/constants';
import {Player, PlayerConfiguration} from 'theoplayer';

const element: HTMLElement = document.getElementById('my-player')!;
const configuration: PlayerConfiguration = {
    license: LICENSE,
    libraryLocation: `${import.meta.env.BASE_URL}vendor/theoplayer/`
};

const player: Player = new THEOplayer.Player(element, configuration);

player.src = '//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8';
