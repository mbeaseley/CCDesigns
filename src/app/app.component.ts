import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input()
  click: boolean;
  classId: any;
  title: any;

  constructor() {
    this.title = 'app';
    this.click = false;
  }

  ngOnInit() {

  }

  myMethod() {
    if (this.click === false) {
      this.click = true;
      console.log('click_change: ', this.click);

      
      $('page__socialContrainer').addClass('socialContrainerMove');
      return console.log('testy');
    } else {
      this.click = false;
      console.log('click_change: ', this.click);
    }
  }
}
