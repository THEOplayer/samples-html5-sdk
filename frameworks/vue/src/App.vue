<script setup>
import Player from './components/Player.vue';

const source = {
  sources: [
    {
      type: 'application/x-mpegurl',
      src: 'https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8'
    }
  ]
};
</script>

<template>
  <h1>Vue.js OptiView Player sample</h1>
  <Player :source="source" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
