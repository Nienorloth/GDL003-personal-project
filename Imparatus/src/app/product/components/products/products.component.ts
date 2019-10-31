import { Component, OnInit } from '@angular/core';
import { Product } from './../../../product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/Anillo ojo_120.jpg',
      title: 'Anillo',
      price: 120,
      description: 'Anillo con ojo'
    },
    {
      id: '2',
      image: 'assets/images/200.jpg',
      title: 'Arracadas',
      price: 200,
      description: 'Aretes de plata estilo arracadas gruesas'
    },
    {
      id: '3',
      image: 'assets/images/240.jpg',
      title: 'Pulsera con ojo',
      price: 240,
      description: 'Pulsera de plata con ojo'
    },
    {
      id: '4',
      image: 'assets/images/280.jpg',
      title: 'Collar',
      price: 280,
      description: 'Collar con piedras y concha'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

}
