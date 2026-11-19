import { render } from 'solid-js/web';
import { createSignal, onCleanup, onMount, Show } from 'solid-js';
import './style.css';

// Your OptiView Player license string. Without a license, the player only works on localhost.
const LICENSE = '';

function App() {
  let host!: HTMLDivElement;
  const [error, setError] = createSignal('');
  let disposed = false;
  let ui: HTMLElement | undefined;

  onMount(() => {
    void import('@theoplayer/web-ui').then(({ DefaultUI }) => {
      if (disposed) return;
      const playerUI = new DefaultUI({ libraryLocation: '/vendor/theoplayer/', license: LICENSE });
      playerUI.source = {
        sources: [{ src: 'https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8', type: 'application/x-mpegurl' }]
      };
      ui = playerUI;
      host.append(playerUI);
    }).catch(() => { if (!disposed) setError('Unable to load the player.'); });
  });
  onCleanup(() => {
    disposed = true;
    ui?.remove();
  });

  return <main>
    <h1>OptiView Player — Solid</h1>
    <p>Elephants Dream, streamed with HLS.</p>
    <div class="player" ref={host} />
    <Show when={error()}><p class="error" role="alert">{error()}</p></Show>
  </main>;
}

render(() => <App />, document.getElementById('root')!);
