import SourceList from './pages/sourcelist';
import THEOplayerPlugin from './utils/THEOplayer';
import Splash from './pages/splash';
import Player from './pages/player';

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
