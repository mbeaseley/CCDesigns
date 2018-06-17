import { Component, OnInit } from '@angular/core';
import { SlideshowModule } from 'ng-simple-slideshow';


@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageUrls = [
    
  ];

  ngOnInit() {}

}
