import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../providers/product.service';
import {ProductInterface} from '../../models/product.interface';

@Component({
  selector: 'pow-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: ProductInterface[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.cart.subscribe((products: ProductInterface[]) => {
      this.products = products;
    });

    this.productService.loadCart();
  }

  calcTotal() {
    let total = 0;
    for(let p of this.products) {
      total += p.count * p.price;
    }

    return total;
  }
}
