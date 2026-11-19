import SourceList from './pages/SourceList';
import THEOplayerPlugin from './utils/THEOplayer';
import Splash from './pages/Splash';
import Player from './pages/Player';

export default {
    boot: () => {
        return THEOplayerPlugin.initLibrary();
    },
    root: 'list',
    routes: [
        {
            path: 'list',
            component: SourceList
        },
        {
            path: 'player/:assetId',
            component: Player
        },
        {
            path: '$',
            component: Splash
        }
    ]
};
