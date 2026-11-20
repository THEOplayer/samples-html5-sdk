import { DefaultUI } from '@theoplayer/web-ui';
import { LICENSE } from '../../../util/constants';

const configuration = {
    license: LICENSE,
    libraryLocation: '/vendor/theoplayer/'
};

const ui = new DefaultUI(configuration);
ui.source = {
    sources: {
        src: 'https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8',
        type: 'application/x-mpegurl'
    }
};

document.getElementById('my-player').appendChild(ui);
