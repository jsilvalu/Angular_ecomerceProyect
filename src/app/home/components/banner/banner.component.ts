import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[] = [
    'assets/banners/1.jpeg',
    'assets/banners/2.jpeg',
    'assets/banners/3.jpeg',
    'assets/banners/4.jpeg',
    'assets/banners/5.jpeg'
  ];

  constructor() { }

  ngOnInit() {
  }

}
