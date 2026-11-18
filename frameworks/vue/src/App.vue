<template>
  <div id="app">
     <img alt="Vue logo" src="./assets/logo.png">
    <Player :source="source" v-if="source"/>
  </div>
</template>

<script>
import Player from "./components/Player.vue";

export default {
  name: "app",
  components: {
    Player
  },
  data: function() {
    return {
      source: [
        {
          type: "application/x-mpegurl",
          src:
            "//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8"
        }
      ]
    };
  }
};
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

