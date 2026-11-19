'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { DefaultUI } from '@theoplayer/react-ui';
import type { ChromelessPlayer, PlayerConfiguration, PreloadType, SourceDescription } from 'theoplayer/chromeless';

export interface THEOplayerWrapperProps {
    preload?: PreloadType;
    autoplay?: boolean;
    source: SourceDescription;
    onPlay?: () => void;
}

const configuration: PlayerConfiguration = {
    license: process.env.NEXT_PUBLIC_THEOPLAYER_LICENSE ?? '',
    libraryLocation: '/vendor/theoplayer/',
};

function THEOplayerWrapper({ preload, autoplay, source, onPlay }: THEOplayerWrapperProps) {
    const playerRef = useRef<ChromelessPlayer | null>(null);
    const [isReady, setIsReady] = useState(false);
    const onReady = useCallback((player: ChromelessPlayer) => {
        playerRef.current = player;
        setIsReady(true);
    }, []);

    useEffect(() => {
        if (playerRef.current) playerRef.current.preload = preload ?? 'none';
    }, [isReady, preload]);

    useEffect(() => {
        if (playerRef.current) playerRef.current.autoplay = autoplay ?? false;
    }, [isReady, autoplay]);

    useEffect(() => {
        const player = playerRef.current;
        if (!player || !onPlay) return;
        player.addEventListener('play', onPlay);
        return () => player.removeEventListener('play', onPlay);
    }, [isReady, onPlay]);

    return (
        <div style={{ width: '100%', aspectRatio: '16 / 9' }}>
            <DefaultUI configuration={configuration} source={source} onReady={onReady} />
        </div>
    );
}

export default THEOplayerWrapper;
