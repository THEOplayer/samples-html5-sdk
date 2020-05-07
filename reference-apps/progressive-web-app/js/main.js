window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }

    var element = document.querySelector(".theoplayer-container");
    var player = new THEOplayer.Player(element, {
        // ***** REPLACE THEOPLAYER LOCATION *****
        libraryLocation:
            "theoplayer/",
        // *****
        ui: {
            width: "100%",
            height: "100%"
        }
    });

    player.source = {
        // this stream already includes French and Chinese subtitles
        sources: {
            type: "application/x-mpegurl",
            src:
                "https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"
        }
    };

}