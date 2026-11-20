'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { PreloadType, SourceDescription } from 'theoplayer';
import { Player } from 'theoplayer';

export interface THEOplayerWrapperProps {
    preload?: PreloadType;
    autoplay?: boolean;
    source: SourceDescription;
    onPlay?: () => void;
}

function THEOplayerWrapper({ preload, autoplay, source, onPlay }: THEOplayerWrapperProps) {
    const playerRef = useRef<Player | null>(null);
    const [isReady, setIsReady] = useState(false);

    const setContainer = useCallback((container: HTMLDivElement) => {
        const player = new Player(container, {
            license: process.env.NEXT_PUBLIC_THEOPLAYER_LICENSE,
            libraryLocation: '/vendor/theoplayer/',
        });
        playerRef.current = player;
        setIsReady(true);
        return () => {
            player.destroy();
            playerRef.current = null;
            setIsReady(false);
        };
    }, []);

    useEffect(() => {
        if (playerRef.current) playerRef.current.preload = preload ?? 'none';
    }, [isReady, preload]);

    useEffect(() => {
        if (playerRef.current) playerRef.current.autoplay = autoplay ?? false;
    }, [isReady, autoplay]);

    useEffect(() => {
        if (playerRef.current) playerRef.current.source = source;
    }, [isReady, source]);

    useEffect(() => {
        const player = playerRef.current;
        if (!player || !onPlay) return;
        player.addEventListener('play', onPlay);
        return () => player.removeEventListener('play', onPlay);
    }, [isReady, onPlay]);

    return <div className={'video-js theoplayer-skin vjs-16-9'} ref={setContainer} />;
}

export default THEOplayerWrapper;
