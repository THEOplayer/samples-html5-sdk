import { useEffect, useRef } from 'react';
import { Player, UIPlayerConfiguration } from 'theoplayer';

import 'theoplayer/ui.css';

export type PlayerCallback = (player: Player) => void;

interface Props {
    onPlayerCreated?: PlayerCallback;
    onPlayerDestroyed?: PlayerCallback;
    license: string;
}

export function THEOplayerView({ onPlayerCreated, license, onPlayerDestroyed }: Props) {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!container.current) return;
        const config: UIPlayerConfiguration = {
            license,
            // THEOplayer loads workers for transmuxing and other tasks from this location,
            // so the library files are copied next to the app (see vite.config.ts).
            libraryLocation: `${import.meta.env.BASE_URL}vendor/theoplayer/`,
            ui: {
                fluid: true,
            },
            mutedAutoplay: 'all',
        };
        const player = new Player(container.current, config);
        onPlayerCreated?.(player);

        return () => {
            onPlayerDestroyed?.(player);
            player.destroy();
        };
    }, [license, onPlayerCreated, onPlayerDestroyed]);

    return <div ref={container} className="theoplayer-container video-js theoplayer-skin vjs-16-9 THEOplayer" />;
}
