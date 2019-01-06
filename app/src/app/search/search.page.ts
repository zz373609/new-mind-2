import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  array = ['../../assets/img/1.png','../../assets/img/2.png']
  news = ['new1','new2','new3','new1','new2','new3','new1','new2','new3']
  constructor(private route: Router) {
    
  }

  ngOnInit() {
  }

  goback() {
    this.route.navigate(['home'])
  }

}
