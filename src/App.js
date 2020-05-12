import React from 'react';
import logo from './logo.svg';
import './App.css';
import Player from './THEOplayerWrapper'

function App() {
	let source = {
        sources: [{
            src: "//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8",
            type: "application/x-mpegurl"
        }]
    };
    return ( 
		<div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">THEOplayer ♥ React!</h1>
                </header>
                <div className={"PlayerDiv"}>
                    <Player source={source} onPlay={() => {console.log("The player has started playing.")}}/>
                </div>
            </div>
    );
}

export default App;