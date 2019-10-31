import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

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
    },
    {
      id: '5',
      image: 'assets/images/300_2.jpg',
      title: 'Pulsera',
      price: 300,
      description: 'Pulsera de plata'
    },
    {
      id: '6',
      image: 'assets/images/1.jpg',
      title: 'Pulsera',
      price: 180,
      description: 'Pulsera de libélula/Árbol. Acero inoxidable'
        }
    ];
  
  constructor() { }

  getAllProducts() {
     return this.products;
  }
  getProduct(id: string) {
    return this.products.find(item => id === item.id)
  }
}
