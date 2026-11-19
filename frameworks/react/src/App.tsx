import { useCallback } from 'react';
import { DefaultUI } from '@theoplayer/react-ui';
import type { ChromelessPlayer, PlayerConfiguration, SourceDescription } from 'theoplayer/chromeless';
import './App.css';

const license = '';

const configuration: PlayerConfiguration = {
    license,
    // The player loads its workers from this location, so vite.config.ts copies the library files next to the app.
    libraryLocation: `${import.meta.env.BASE_URL}vendor/theoplayer/`,
};

const source: SourceDescription = {
    sources: [
        {
            src: 'https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8',
            type: 'application/x-mpegurl',
        },
    ],
};

function App() {
    const onReady = useCallback((player: ChromelessPlayer): void => {
        console.log('Player is ready');
        player.muted = true;
        player.autoplay = true;
    }, []);

    return (
        <div className="App">
            <DefaultUI configuration={configuration} source={source} onReady={onReady} />
        </div>
    );
}

export default App;
