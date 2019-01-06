import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-noise',
  templateUrl: './noise.page.html',
  styleUrls: ['./noise.page.scss'],
})
export class NoisePage implements OnInit {
  constructor(private route: Router) {

  }
  
  ngOnInit() {
  }


  goback() {
    this.route.navigate(['home'])
  }

}
