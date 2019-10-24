import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Imparatus';

  items = ['Aretes', 'Collar', 'Pulsera', 'Tiara', 'Argolla'];

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/anillo.png',
      title: 'Anillo árbol',
      price: 120,
      description: 'Anillo de plata con árbol'
    },
    {
      id: '2',
      image: 'assets/images/aretes.png',
      title: 'Arracadas',
      price: 170,
      description: 'Aretes de plata estilo arracadas gruesas'
    },
    {
      id: '3',
      image: 'assets/images/juego tortuga.png',
      title: 'Juego de aretes y collar de tortuga',
      price: 280,
      description: 'Conjunto de aretes y collar con dije, de plata'
    },
    {
      id: '4',
      image: 'assets/images/pulsera.png',
      title: 'Pulsera árabe',
      price: 150,
      description: 'Pulsera de plata con ojo'
    },
    {
      id: '1',
      image: 'assets/images/collar.png',
      title: 'Collar',
      price: 150,
      description: 'Collar de plata con pedrería de colores'
    }
  ];

  addItem() {
    this.items.push('nuevo item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
