<script setup lang="ts">
import type { SourceDescription } from 'theoplayer/chromeless'

const source: SourceDescription = {
  sources: [
    {
      type: 'application/x-mpegurl',
      src: 'https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8'
    }
  ]
}
</script>

<template>
  <div class="container">
    <h1 class="title">Nuxt OptiView Player sample</h1>
    <!-- THEOplayer requires browser APIs, so the player is only rendered on the client. -->
    <ClientOnly>
      <Player :source="source" />
    </ClientOnly>
  </div>
</template>

<style>
.container {
  margin: 0 auto;
  max-width: 960px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
</style>
