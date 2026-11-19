<script lang="ts">
  import { onMount } from 'svelte';
  import '../style.css';

  // Your OptiView Player license string. Without a license, the player only works on localhost.
  const LICENSE = '';

  let host: HTMLDivElement;
  let error = $state('');

  onMount(() => {
    let disposed = false;
    let ui: HTMLElement | undefined;
    void import('@theoplayer/web-ui').then(({ DefaultUI }) => {
      if (disposed) return;
      const playerUI = new DefaultUI({ libraryLocation: '/vendor/theoplayer/', license: LICENSE });
      playerUI.source = {
        sources: [{ src: 'https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8', type: 'application/x-mpegurl' }]
      };
      ui = playerUI;
      host.append(playerUI);
    }).catch(() => { if (!disposed) error = 'Unable to load the player.'; });
    return () => {
      disposed = true;
      ui?.remove();
    };
  });
</script>

<svelte:head><title>OptiView Player — SvelteKit</title></svelte:head>
<main>
  <h1>OptiView Player — SvelteKit</h1>
  <p>Elephants Dream, streamed with HLS.</p>
  <div class="player" bind:this={host}></div>
  {#if error}<p class="error" role="alert">{error}</p>{/if}
</main>
