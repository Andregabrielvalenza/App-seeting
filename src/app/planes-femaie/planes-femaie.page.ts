import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planes-femaie',
  templateUrl: './planes-femaie.page.html',
  styleUrls: ['./planes-femaie.page.scss'],
})
export class PlanesFemaiePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slideOpts = {
    initialSlide: 2,
    slidesPerView: 1.4,
    spaceBetween: 12,
  };

}
