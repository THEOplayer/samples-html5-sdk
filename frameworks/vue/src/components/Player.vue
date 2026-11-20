<script setup>
import { onBeforeUnmount, onMounted, useTemplateRef, watch } from 'vue';
import { DefaultUI } from '@theoplayer/web-ui';

// Your OptiView Player license string. Without a license, the player only works on localhost.
const LICENSE = '';

const props = defineProps({
  source: { type: Object, required: true }
});

const container = useTemplateRef('container');
let ui;

onMounted(() => {
  ui = new DefaultUI({
    license: LICENSE,
    libraryLocation: `${import.meta.env.BASE_URL}vendor/theoplayer/`
  });
  ui.source = props.source;
  container.value.appendChild(ui);
});

watch(
  () => props.source,
  (source) => {
    if (ui) ui.source = source;
  }
);

onBeforeUnmount(() => {
  ui?.remove();
});
</script>

<template>
  <div ref="container" class="player"></div>
</template>

<style>
.player {
  max-width: 960px;
  margin: 0 auto;
  aspect-ratio: 16 / 9;
}

theoplayer-default-ui {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
