import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from './../../../core/services/products/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
  private FormBuilder: FormBuilder,
  private productsService: ProductsService,
  private Router: Router,
  private activatedRoute: ActivatedRoute
  ) {
    this.BuildForm();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) =>{
      this.id = params.id;
      this.productsService.getProduct(this.id)
      .subscribe(product =>{
        this.form.patchValue({
          id: product._id,
          title: product.title,
          price: product.price,
          image: product.image,
          description: product.description,

        });
      })
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.updateProduct(this.id, product)
      .subscribe((newProduct) => {
        console.log(newProduct);
        this.Router.navigate(['./admin/products']);
      })
    }
  }

  private BuildForm() {
    this.form = this.FormBuilder.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      image: [''],
      description:['']
    });
  }

}

