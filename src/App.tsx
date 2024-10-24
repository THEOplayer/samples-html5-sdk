import { useCallback } from 'react';
import { Player } from 'theoplayer';
import './App.css';

import { THEOplayerView } from './player/THEOplayerView';

const license = '<insert license>';

function App() {
    const onPlayer = useCallback((player: Player): void => {
        console.log('onPlayer, loading and setting source');

        player.muted = true;
        player.autoplay = true;
        // MPEG-DASH Sample source
        player.source = {
            sources: [
                {
                    src: '//dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd',
                    type: 'application/dash+xml',
                },
            ],
        };
        // HLS Sample source
        // player.source = {
        //     sources: [
        //         {
        //             src: '//cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8',
        //             type: 'application/x-mpegurl',
        //         },
        //     ],
        // };
    }, []);

    return (
        <div className="App">
            <THEOplayerView onPlayerCreated={onPlayer} license={license} />
        </div>
    );
}

export default App;
