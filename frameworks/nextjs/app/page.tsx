'use client';

import { useCallback, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import type { PreloadType, SourceDescription } from 'theoplayer/chromeless';
import styles from './page.module.css';

// OptiView Player requires browser APIs, so it is only rendered on the client.
const THEOplayerWrapper = dynamic(() => import('../components/THEOplayerWrapper'), {
    ssr: false,
    loading: () => <div style={{ aspectRatio: '16 / 9' }} />,
});

const preloadTypes: PreloadType[] = ['none', 'metadata', 'auto'];

export default function Home() {
    const source = useMemo<SourceDescription>(
        () => ({
            sources: [
                {
                    src: 'https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8',
                    type: 'application/x-mpegurl',
                },
            ],
            poster: 'https://cdn.theoplayer.com/video/elephants-dream.png',
        }),
        [],
    );
    const [autoplay, setAutoPlay] = useState(false);
    const [preload, setPreload] = useState<PreloadType>('none');
    const onPlay = useCallback(() => {
        console.log('The player has started playing.');
    }, []);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>OptiView Player with Next.js</h1>
                <THEOplayerWrapper source={source} preload={preload} autoplay={autoplay} onPlay={onPlay} />
                <div className={styles.options}>
                    <label>
                        <input type="checkbox" checked={autoplay} onChange={() => setAutoPlay(!autoplay)} /> Autoplay
                    </label>
                    <label>
                        Preload:&nbsp;
                        <select value={preload} onChange={(e) => setPreload(e.target.value as PreloadType)}>
                            {preloadTypes.map((preloadOption) => (
                                <option key={preloadOption} value={preloadOption}>
                                    {preloadOption}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
            </main>
        </div>
    );
}
