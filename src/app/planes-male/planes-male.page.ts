import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planes-male',
  templateUrl: './planes-male.page.html',
  styleUrls: ['./planes-male.page.scss'],
})
export class PlanesMalePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  slideOpts = {
    initialSlide: 2,
    slidesPerView: 1.4,
    spaceBetween: 12,
  };

}
