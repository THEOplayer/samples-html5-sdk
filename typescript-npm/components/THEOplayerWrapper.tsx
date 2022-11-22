import React, {useEffect} from 'react';
import * as THEOplayer from 'theoplayer';
import {Player, PlayerConfiguration} from 'theoplayer';
import 'theoplayer/ui.css';

function THEOplayerWrapper(props: { data: any; onPlay: any; }) {

    let el = React.createRef<HTMLDivElement>();

    useEffect(() => {
            if (el && el.current) {
                let element: HTMLDivElement = el.current;
                let configuration : PlayerConfiguration = {
                    license: process.env.theoplayerLicenseString,
                    libraryLocation: process.env.theoplayerLibraryLocation
                };
                let player : Player = new THEOplayer.Player(element, configuration);
                player.preload = props.data.preload;
                player.autoplay = props.data.autoplay;
                if (props.onPlay) {
                    player.addEventListener('play', props.onPlay);
                }
                player.source = props.data.source;
            }

    }, []);
    return (<
            div
            className={"video-js theoplayer-skin vjs-16-9"}
            ref={el}
        />
    );

}

export default THEOplayerWrapper;
