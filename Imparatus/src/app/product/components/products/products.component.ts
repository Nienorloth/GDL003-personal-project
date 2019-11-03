import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers:  [ ProductsService ]
})
export class ProductsComponent implements OnInit {
 products: any;

  constructor(private service: ProductsService) {
   }

  ngOnInit(){
    this.service.getAllProducts().subscribe(r => {
      this.products = r.map(i => {
        return { id: i.payload.doc.id, ...i.payload.doc.data() };
      });
    });
  }
  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

}
