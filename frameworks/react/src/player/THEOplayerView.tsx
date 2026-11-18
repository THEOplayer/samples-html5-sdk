import { useEffect, useCallback, useState, useRef } from 'react';
import { Player, PlayerConfiguration, UIPlayerConfiguration } from 'theoplayer';

import '/node_modules/theoplayer/ui.css';

export type PlayerCallback = (player: Player) => void;

interface Props {
    onPlayerCreated?: PlayerCallback | undefined;
    onPlayerDestroyed?: PlayerCallback | undefined;
    license: string;
}

export function THEOplayerView({ onPlayerCreated, license, onPlayerDestroyed }: Props) {
    const player = useRef<Player | null>(null);
    const container = useRef<null | HTMLDivElement>(null);

    useEffect(() => {
        // Create player inside container.
        if (container.current) {
            console.log('THEOplayerView, creating THEOplayer');
            const config: UIPlayerConfiguration = {
                license,
                // Note: THEOplayer loads workers for transmuxing and other tasks
                // these workers need to be located on the same server (see npm run copy:theoplayer)
                libraryLocation: `${process.env.PUBLIC_URL}/vendor/theoplayer`,
                ui: {
                    fluid: true,
                },
                mutedAutoplay: 'all'
            };
            player.current = new Player(container.current, config);
            // Notify the player is ready
            onPlayerCreated?.(player.current);
        }

        // Clean-up
        return () => {
            // Notify the player will be destroyed.
            if (player?.current && onPlayerDestroyed) {
                onPlayerDestroyed(player?.current);
            }
            player?.current?.destroy();
        };
    }, [container]);

    return (
        <div
            ref={container}
            className="theoplayer-container video-js theoplayer-skin vjs-16-9 THEOplayer"
        />
    );
}
