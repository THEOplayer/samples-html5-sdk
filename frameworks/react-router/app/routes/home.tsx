import { useEffect, useState } from 'react';
import type { DefaultUI as DefaultUIComponent } from '@theoplayer/react-ui';

// Your OptiView Player license string. Without a license, the player only works on localhost.
const LICENSE = '';

const configuration = { libraryLocation: '/vendor/theoplayer/', license: LICENSE };
const source = {
  sources: [{ src: 'https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8', type: 'application/x-mpegurl' }]
};

export default function Home() {
  const [UI, setUI] = useState<typeof DefaultUIComponent>();
  const [error, setError] = useState('');

  useEffect(() => {
    let disposed = false;
    void import('@theoplayer/react-ui').then(({ DefaultUI }) => {
      if (!disposed) setUI(() => DefaultUI);
    }).catch(() => { if (!disposed) setError('Unable to load the player.'); });
    return () => { disposed = true; };
  }, []);

  return <main>
    <h1>OptiView Player — React Router</h1>
    <p>Elephants Dream, streamed with HLS.</p>
    <div className="player">{UI ? <UI configuration={configuration} source={source} /> : null}</div>
    {error ? <p className="error" role="alert">{error}</p> : null}
  </main>;
}
