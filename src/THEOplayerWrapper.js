import React from "react";
import './THEOplayerWrapper.css';

class Player extends React.Component {
    _player = null;
    _el = React.createRef();

    componentDidMount() {
        // props like the source, or the sourcedesciption as a whole can be passed through
        // the can then be used to be called on the player itself
        const { source, onPlay } = this.props;

        if (this._el.current) {
            this._player = new window.THEOplayer.Player(this._el.current, {
                libraryLocation: "https://cdn.myth.theoplayer.com/7aff3fa6-f92e-45f9-a40e-1bce9911b073/"
            });

            this._player.source = source;
            this._player.addEventListener('play', onPlay)
        }
    }

    componentWillUnmount() {
      if (this._player) {
        this._player.destroy();
      }
    }

    render() {
        return ( <
            div
            // vjs-16-9 THEOplayer are not necessary, but just added for demo purposes
            className = { "theoplayer-container video-js theoplayer-skin vjs-16-9 THEOplayer" }
            // The ref prop here is key it returns the actual dom element and not the virtual react dom elements
            // Which is need by the player
            ref = { this._el }
            />
        );
    }
}

export default Player;
