import * as THEOplayer from 'theoplayer';

let element = document.querySelector('.theoplayer-container');
let configuration = {
    license: 'sZP7IYe6T6PK3LXg3K0_0OziIDakFSatCL5-CSht06kK3KaiTuaz3QCoCo06FOPlUY3zWokgbgjNIOf9fKaZTux10LUlFDXgTSb-3QIg06k1IKhrFSBrISCo0QPeCo0i36fVfK4_bQgZCYxNWoryIQXzImf90SCc3lCo3lai0u5i0Oi6Io4pIYP1UQgqWgjeCYxgflEc3lBc3Sez3uRt0S5cFOPeWok1dDrLYtA1Ioh6TgV6UQ1gWtAVCYggb6rlWoz6FOPVWo31WQ1qbta6FOfJfgzVfKxqWDXNWG3ybojkbK3gflNWfGxEIDjiWQXrIYfpCoj-f6i6WQjlCDcEWt3zf6i6v6PUFOPLIQ-LflNWfK1zWDikfgzVfG3gWKxydDkibK4LbogqW6f9UwPkIYz',
    libraryLocation: '/node_modules/theoplayer/'
};
let player = new THEOplayer.Player(element, configuration);
player.src = "//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8";