# THEOAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
_A brief guide on how to build a THEOplayer in an Angular environment._

Note that this information is for a basic player in a local testing environment. Additional information may be needed for specific cases.

## Step-by-step guide:

1. Make sure you have the Angular CLI installed

```
npm install -g @angular/cli
```

2. If needed, create a new workspace and initial application
   ng new appname

3. In the root project, create a new component for the player (in this case appname)

```
cd appname
ng generate component theoplayer
```

4. add the THEOplayer.js files to the root project
5. In index.html add the /THEOplayer.js as a script tag and /ui.css as a stylesheet
6. In theoplayer.component.html add

```
<div class="theoplayer-container video-js theoplayer-skin"></div>
```

7. In theoplayer.component.ts add

```
import { Component, OnInit } from '@angular/core';
import * as THEOplayer from '../../../THEOplayer.js';

@Component({
  selector: 'app-theoplayer',
  templateUrl: './theoplayer.component.html',
  styleUrls: ['./theoplayer.component.css']
})
export class TheoplayerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.createPlayer();
  }

  createPlayer() {
    const element = document.querySelector('.theoplayer-container');

    const player = new THEOplayer.Player(element, {
      libraryLocation : ''
    });

    player.source = {
     sources : [{
         src : '//cdn.theoplayer.com/video/elephants-dream/playlist.m3u8',
         type : 'application/x-mpegurl' // sets type to MPEG-DASH
     }]
 };
  }
}
```

Then

```
import * as THEOplayer from '../../../THEOplayer.js;
```

will make sure to get everything needed from our sdk.

9. In app.component.html add the following code to display the player in the app component.

```
<app-theoplayer></app-theoplayer>
```

10. Profit.

A link to the example project can be found here:

https://s3.eu-west-3.amazonaws.com/theoplayer-angular/THEOAngular.zip

## Related articles

https://angular.io/guide/quickstart
