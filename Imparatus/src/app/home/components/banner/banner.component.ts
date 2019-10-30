import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

images: string[] = [
  'assets/images/165.jpg',
  'assets/images/450/36.jpg',
  'assets/images/450/37.jpg',
  'assets/images/450/315.jpg',
  'assets/images/450/313.jpg',
  'assets/images/450/314.jpg',
  'assets/images/450/331.jpg'
];

  constructor() { }

  ngOnInit() {
  }

}
