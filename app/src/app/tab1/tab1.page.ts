import { Component } from '@angular/core';
import { noise, musics } from '../../mock.js'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  noise:[]
  musics:[]
  constructor() {
    this.noise = noise
    this.musics = musics
  }
}
