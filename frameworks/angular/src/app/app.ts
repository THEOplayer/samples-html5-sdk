import { Component } from '@angular/core';
import { TheoplayerComponent } from './theoplayer/theoplayer.component';

@Component({
  selector: 'app-root',
  imports: [TheoplayerComponent],
  template: `
    <h1>Angular OptiView Player sample</h1>
    <app-theoplayer [source]="source" />
  `,
})
export class App {
  source = {
    sources: [
      {
        src: 'https://cdn.theoplayer.com/video/elephants-dream/playlist.m3u8',
        type: 'application/x-mpegurl',
      },
    ],
  };
}
