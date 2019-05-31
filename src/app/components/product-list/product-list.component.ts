import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../providers/product.service';
import {ProductInterface} from '../../models/product.interface';

@Component({
  selector: 'pow-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: ProductInterface[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
