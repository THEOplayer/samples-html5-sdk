window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }

    const element = document.querySelector(".theoplayer-container");
    const ui = new THEOplayerUI.DefaultUI({
        // Change this if you serve the OptiView Player files from another folder.
        libraryLocation: "../../node_modules/theoplayer/",
        // Replace with your license to play on your own domains.
        license:"sZP7IYe6T6f_TQ41CSU13OzkIlglFSaz0S5-CSbzI6ztCLUKTDx10L0kIlf6FOPlUY3zWokgbgjNIOf9flBk0uU60lCoFSfZ0LR-3QBZCmzr3DfrFSg6CKakIS5iIQfkIOfVfK4_bQgZCYxNWoryIQXzImf90lao0Ler0Sfi0u5i0Oi6Io4pIYP1UQgqWgjeCYxgflEc3lbZTSez3u5cTuRcFOPeWok1dDrLYtA1Ioh6TgV6WQjlCDcEWt3zf6i6UQ1gWtAVCYggb6rlWoz6Ymi6IQj-CDgpbkjLWt4ZCoh6TgV6v6fVfKcqCoXVdQjLUOfVfGxEIDjiWQXrIYfpCoj-fgzVfG3edt06TgV6dwx-Wuh6Ymi6bo4pIXjNWYAZIY3LdDjpflNzbG4gFOPKIDXzUYPgbZf9Dkkj",
    });
    element.appendChild(ui);

    ui.source = {
        // this stream already includes French and Chinese subtitles
        sources: {
            type: "application/x-mpegurl",
            src: "https://cdn.theoplayer.com/video/big_buck_bunny/big_buck_bunny.m3u8"
        }
    };

}
