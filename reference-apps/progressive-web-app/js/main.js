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
            "../../node_modules/theoplayer/",
        // ***** REPLACE WITH YOUR LICENSE TO PLAY ON YOUR DOMAINS *****
        license:"sZP7IYe6T6f_TQ41CSU13OzkIlglFSaz0S5-CSbzI6ztCLUKTDx10L0kIlf6FOPlUY3zWokgbgjNIOf9flBk0uU60lCoFSfZ0LR-3QBZCmzr3DfrFSg6CKakIS5iIQfkIOfVfK4_bQgZCYxNWoryIQXzImf90lao0Ler0Sfi0u5i0Oi6Io4pIYP1UQgqWgjeCYxgflEc3lbZTSez3u5cTuRcFOPeWok1dDrLYtA1Ioh6TgV6WQjlCDcEWt3zf6i6UQ1gWtAVCYggb6rlWoz6Ymi6IQj-CDgpbkjLWt4ZCoh6TgV6v6fVfKcqCoXVdQjLUOfVfGxEIDjiWQXrIYfpCoj-fgzVfG3edt06TgV6dwx-Wuh6Ymi6bo4pIXjNWYAZIY3LdDjpflNzbG4gFOPKIDXzUYPgbZf9Dkkj",


        ui: {
            width: "100%",
            height: "100%"
        }
    });

    player.source = {
        // this stream already includes French and Chinese subtitles
        sources: {
            type: "application/x-mpegurl",
            src:  "https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"
        }
    };

}