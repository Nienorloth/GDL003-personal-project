import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../product.model';
import { Event } from '@angular/router';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent {

   @Input() product: Product;
   @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

   addCart() {
       console.log('Añadir al carrito');
       this.productClicked.emit(this.product.id);
   }
}
