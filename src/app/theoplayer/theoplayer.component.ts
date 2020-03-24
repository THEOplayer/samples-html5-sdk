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
         type : 'application/x-mpegurl'
     }]
 };
  }
}

