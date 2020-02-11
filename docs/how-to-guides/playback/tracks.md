# Tracks for web

Check [How to programmatically enable or disable audio tracks](https://github.com/THEOplayer/knowlege-base/blob/master/how-to-guides/playback/tracks.md)

The code examples below show how to implement toggling audio tracks. It's advised to disable audio tracks which you don't want to play, in order to avoid issues with overlapping audio.
```js
// disable all audio tracks
player.audioTracks.forEach(function(track) {
    track.enabled = false;
});
// enable a specific audio track
player.audioTracks[indexOfRequestedAudioTrack].enabled = true;
```
