import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
  }

  slideOpts = {
    autoplay: true,
    initialSlide: 0,
    speed: 400,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  };
 

}
