import { Component, OnInit } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';


@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {
  link: string
  music: any
  private test: number
  constructor(private nativeAudio: NativeAudio) {
    this.music = new Audio()
    this.test = 1
  }

  ngOnInit() {
    console.log(this.test)
    this.onloadMusic('http://images.shinemeditation.cn/291E44835C26621F')
  }

  onloadMusic(link) {
    this.music.src = link
    this.music.load()
    this.music.play()
  }

  switchMusic(){
    this.onloadMusic('http://images.shinemeditation.cn/5A2671A4092D049C')
  }
}
