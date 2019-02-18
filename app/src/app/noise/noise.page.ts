import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NativeAudio } from '@ionic-native/native-audio/ngx';


@Component({
  selector: 'app-noise',
  templateUrl: './noise.page.html',
  styleUrls: ['./noise.page.scss'],
})
export class NoisePage implements OnInit {
  constructor(private route: Router, private nativeAudio: NativeAudio) {

  }

  ngOnInit() {
    console.log(this.nativeAudio)
  }

  ionViewDidLoad() {
    this.setMyStyles()
  }

  setMyStyles() {
    return { "background-image": 'url(' + '../../assets/gif/rain.gif' + ')' }
  }


  goback() {
    this.route.navigate(['home'])
  }

}
