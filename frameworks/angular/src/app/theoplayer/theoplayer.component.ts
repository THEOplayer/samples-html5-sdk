import { afterNextRender, Component, effect, ElementRef, input, OnDestroy, viewChild } from '@angular/core';
import { Player, SourceDescription } from 'theoplayer';

// Your OptiView Player license string. Without a license, the player only works on localhost.
const LICENSE = '';

@Component({
  selector: 'app-theoplayer',
  template: `<div #container class="theoplayer-container video-js theoplayer-skin vjs-16-9"></div>`,
  styleUrl: './theoplayer.component.css',
})
export class TheoplayerComponent implements OnDestroy {
  readonly source = input.required<SourceDescription>();
  private readonly container = viewChild.required<ElementRef<HTMLDivElement>>('container');
  private player: Player | undefined;

  constructor() {
    // THEOplayer requires browser APIs, so the player is created after the first render.
    afterNextRender(() => {
      this.player = new Player(this.container().nativeElement, {
        license: LICENSE,
        // The library files are copied to vendor/theoplayer (see angular.json).
        libraryLocation: 'vendor/theoplayer/',
      });
      this.player.source = this.source();
    });
    effect(() => {
      const source = this.source();
      if (this.player) {
        this.player.source = source;
      }
    });
  }

  ngOnDestroy(): void {
    this.player?.destroy();
  }
}
