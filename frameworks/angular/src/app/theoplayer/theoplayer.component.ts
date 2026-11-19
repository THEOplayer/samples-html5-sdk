import { afterNextRender, Component, effect, ElementRef, input, OnDestroy, viewChild } from '@angular/core';
import { DefaultUI } from '@theoplayer/web-ui';
import type { SourceDescription } from 'theoplayer/chromeless';

// Your OptiView Player license string. Without a license, the player only works on localhost.
const LICENSE = '';

@Component({
  selector: 'app-theoplayer',
  template: `<div #container class="theoplayer-container"></div>`,
  styleUrl: './theoplayer.component.css',
})
export class TheoplayerComponent implements OnDestroy {
  readonly source = input.required<SourceDescription>();
  private readonly container = viewChild.required<ElementRef<HTMLDivElement>>('container');
  private ui: DefaultUI | undefined;

  constructor() {
    afterNextRender(() => {
      this.ui = new DefaultUI({
        license: LICENSE,
        libraryLocation: 'vendor/theoplayer/',
      });
      this.ui.source = this.source();
      this.container().nativeElement.appendChild(this.ui);
    });

    effect(() => {
      const source = this.source();
      if (this.ui) {
        this.ui.source = source;
      }
    });
  }

  ngOnDestroy(): void {
    this.ui?.remove();
  }
}
