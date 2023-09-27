'use client';

import React, { useCallback, useEffect, useState } from 'react';
import type { Player, PlayerConfiguration, PreloadType, SourceDescription } from 'theoplayer';
import * as THEOplayer from 'theoplayer';
import 'theoplayer/ui.css';

export interface THEOplayerData {
    preload?: PreloadType,
    autoplay?: boolean,
    source: SourceDescription
}

export interface THEOplayerWrapperProps {
    data: THEOplayerData,
    onPlay?: () => void
}

function THEOplayerWrapper({data, onPlay}: THEOplayerWrapperProps) {
    const [player, setPlayerEl] = usePlayer({
        license: process.env.theoplayerLicenseString,
        libraryLocation: process.env.theoplayerLibraryLocation
    });

    useEffect(() => {
        if (!player) return;
        player.preload = data.preload ?? 'none';
        player.autoplay = data.autoplay ?? false;
        player.source = data.source;
    }, [player]);

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

function usePlayer(configuration: PlayerConfiguration): [Player | null, (el: HTMLElement | null) => void] {
    const [player, setPlayer] = useState<Player | null>(null);
    const setPlayerEl = useCallback((el: HTMLElement | null) => {
        if (player !== null) {
            player.destroy();
            setPlayer(null);
        }
        if (el !== null) {
            const player = new THEOplayer.Player(el, configuration);
            setPlayer(player);
        }
    }, []);
    return [player, setPlayerEl];
}

export default THEOplayerWrapper;
