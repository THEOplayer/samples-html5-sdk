import { useCallback } from 'react';
import { Player } from 'theoplayer';
import './App.css';

import { THEOplayerView } from './player/THEOplayerView';

const license = '';

function App() {
    const onPlayer = useCallback((player: Player): void => {
        console.log('onPlayer, loading and setting source');

        player.muted = true;
        player.autoplay = true;
        // HLS Sample source
        player.source = {
            sources: [
                {
                    src: 'https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8',
                    type: 'application/x-mpegurl',
                },
            ],
        };
        // HLS Sample source
        // player.source = {
        //     sources: [
        //         {
        //             src: 'https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8',
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
