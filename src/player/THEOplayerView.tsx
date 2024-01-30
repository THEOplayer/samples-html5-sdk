import { useEffect, useCallback, useState } from 'react';
import { Player } from 'theoplayer';

import '/node_modules/theoplayer/ui.css';

export type OnPlayerReady = (player: Player) => void;

interface Props {
    onPlayer: OnPlayerReady;
    license: string;
}

export function THEOplayerView({ onPlayer, license }: Props) {
    const [player, setPlayer] = useState<Player | null>(null);
    const onMount = useCallback(
        (node: HTMLElement | null) => {
            if (node) {
                console.log('THEOplayerView, creating THEOplayer');
                const config = {
                    license,
                    // Note: THEOplayer loads workers for transmuxing and other tasks
                    // these workers need to be located on the same server (see npm run build)
                    libraryLocation: `${process.env.PUBLIC_URL}/vendor/theoplayer`,
                    ui: {
                        fluid: true,
                    },
                };

                setPlayer(new Player(node, config));
            }
        },
        [license]
    );

    useEffect(() => {
        if (player && onPlayer) {
            console.log('THEOplayerView, triggering callback');
            onPlayer(player);
        }
    }, [player, onPlayer]);

    return (
        <div
            className="theoplayer-container video-js theoplayer-skin vjs-16-9 THEOplayer"
            ref={onMount}
        />
    );
}
