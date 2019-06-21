import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../providers/product.service';
import {ProductInterface} from '../../models/product.interface';

@Component({
  selector: 'pow-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  productId: number;
  product: ProductInterface;

  constructor(private activeRoute: ActivatedRoute, private productService: ProductService)
  {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.productId = +params['id'];
    })
  }

  ngOnInit() {
    const products = this.productService.getProducts();
    this.product = products.find(p => p.id == this.productId);
  }

}
