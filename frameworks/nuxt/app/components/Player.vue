<script setup lang="ts">
import { DefaultUI } from '@theoplayer/web-ui'
import type { SourceDescription } from 'theoplayer/chromeless'

const props = defineProps<{ source: SourceDescription }>()

const config = useRuntimeConfig()
const container = useTemplateRef<HTMLDivElement>('container')
let ui: DefaultUI | undefined

onMounted(() => {
  ui = new DefaultUI({
    license: config.public.theoplayerLicense,
    libraryLocation: '/vendor/theoplayer/'
  })
  ui.source = props.source
  container.value!.appendChild(ui)
})

watch(
  () => props.source,
  (source) => {
    if (ui) ui.source = source
  }
)

onBeforeUnmount(() => {
  ui?.remove()
})
</script>

<template>
  <div ref="container" class="player" />
</template>

<style>
.player {
  max-width: 960px;
  aspect-ratio: 16 / 9;
}

theoplayer-default-ui {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
