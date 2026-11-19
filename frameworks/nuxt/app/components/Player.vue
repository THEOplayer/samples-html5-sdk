<script setup lang="ts">
import { Player, type SourceDescription } from 'theoplayer'

const props = defineProps<{ source: SourceDescription }>()

const config = useRuntimeConfig()
const container = useTemplateRef<HTMLDivElement>('container')
let player: Player | undefined

onMounted(() => {
  player = new Player(container.value!, {
    license: config.public.theoplayerLicense,
    libraryLocation: '/vendor/theoplayer/',
    ui: { fluid: true }
  })
  player.source = props.source
})

watch(
  () => props.source,
  (source) => {
    if (player) player.source = source
  }
)

onBeforeUnmount(() => {
  player?.destroy()
})
</script>

<template>
  <div ref="container" class="theoplayer-container video-js theoplayer-skin vjs-16-9" />
</template>
