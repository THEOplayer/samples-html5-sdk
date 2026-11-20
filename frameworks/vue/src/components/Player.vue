<script setup>
import { onBeforeUnmount, onMounted, useTemplateRef, watch } from 'vue';
import { Player } from 'theoplayer';
import 'theoplayer/ui.css';

// Your OptiView Player license string. Without a license, the player only works on localhost.
const LICENSE = '';

const props = defineProps({
  source: { type: Object, required: true }
});

const container = useTemplateRef('container');
let player;

onMounted(() => {
  player = new Player(container.value, {
    license: LICENSE,
    // The library files are copied to vendor/theoplayer (see vite.config.js).
    libraryLocation: `${import.meta.env.BASE_URL}vendor/theoplayer/`,
    ui: { fluid: true }
  });
  player.source = props.source;
});

watch(
  () => props.source,
  (source) => {
    if (player) player.source = source;
  }
);

onBeforeUnmount(() => {
  player?.destroy();
});
</script>

<template>
  <div ref="container" class="theoplayer-container video-js theoplayer-skin vjs-16-9 THEOplayer"></div>
</template>

<style>
.THEOplayer {
  max-width: 960px;
  margin: 0 auto;
}
</style>
