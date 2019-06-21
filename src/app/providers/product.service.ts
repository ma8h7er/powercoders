import { Injectable } from '@angular/core';
import {ProductInterface} from '../models/product.interface';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: ProductInterface[];

  cart: BehaviorSubject<ProductInterface[]> = new BehaviorSubject<ProductInterface[]>([]);

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'first product',
        img: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg',
        description: 'this is a product',
        price: 500,
        count: 1
      },
      {
        id: 2,
        name: 'second product',
        img: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg',
        description: 'this is a product',
        price: 980,
        count: 1
      },
      {
        id: 3,
        name: 'third product',
        img: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg',
        description: 'this is a product',
        price: 5009879,
        count: 1
      }
    ];
  }

  getProducts() {
    return this.products;
  }

  addToCart(product: ProductInterface) {
    let cart = this.cart.getValue();
    let index = cart.findIndex(p => p.id == product.id);
    if(index > -1) {
      cart[index].count++;
      this.cart.next(cart);
      this.registerCart(cart);
    } else {
      cart.push(product);
      this.cart.next(cart);
      this.registerCart(cart);
    }
  }

  registerCart(cart: any) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    this.cart.next(cart);
  }

  deleteProduct(id: number) {
    let cart = this.cart.getValue();
    let index = cart.findIndex(p => p.id == id);
    cart.splice(index, 1);
    this.cart.next(cart);
    this.registerCart(cart);
  }
}
