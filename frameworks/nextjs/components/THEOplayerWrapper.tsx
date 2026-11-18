'use client';

import React, {useCallback, useEffect, useRef, useState} from 'react';
import type { Player, PlayerConfiguration, PreloadType, SourceDescription } from 'theoplayer';
import * as THEOplayer from 'theoplayer';

export interface THEOplayerWrapperProps {
    preload?: PreloadType,
    autoplay?: boolean,
    source: SourceDescription,
    onPlay?: () => void
}

function THEOplayerWrapper({ preload, autoplay, source, onPlay }: THEOplayerWrapperProps) {
    const [player, setPlayer] = useState<Player | null>(null);
    const playerRef = useRef<Player | null>(null);

    const setPlayerEl = useCallback((el: HTMLElement | null) => {
        if (!el || playerRef.current) return;

        const newPlayer = new THEOplayer.Player(el, {
            license: process.env.theoplayerLicenseString,
            libraryLocation: process.env.theoplayerLibraryLocation
        });

        playerRef.current = newPlayer;

        (window as any).player = newPlayer;
        setPlayer(newPlayer);
        console.log('Created new player:', newPlayer);

        return () => {
            playerRef.current?.destroy();
            playerRef.current = null;
            setPlayer(null);
        }
    }, []);

    useEffect(() => {
        if (!player) return;
        player.preload = preload ?? 'none';
    }, [player, preload]);

    useEffect(() => {
        if (!player) return;
        player.autoplay = autoplay ?? false;
    }, [player, autoplay]);

    useEffect(() => {
        if (!player) return;
        player.source = source;
    }, [player, source]);

    useEffect(() => {
        if (!player || !onPlay) return;
        player.addEventListener('play', onPlay);
        return () => {
            player.removeEventListener('play', onPlay);
        }
    }, [player, onPlay]);

    return (
        <div
            className={"video-js theoplayer-skin vjs-16-9"}
            ref={setPlayerEl}
        />
    );
}

export default THEOplayerWrapper;
