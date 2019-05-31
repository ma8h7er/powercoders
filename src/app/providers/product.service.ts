import { Injectable } from '@angular/core';
import {ProductInterface} from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: ProductInterface[];

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'first product',
        img: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg',
        description: 'this is a product',
        price: 500
      },
      {
        id: 2,
        name: 'second product',
        img: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg',
        description: 'this is a product',
        price: 980
      },
      {
        id: 3,
        name: 'third product',
        img: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg',
        description: 'this is a product',
        price: 5009879
      }
    ];
  }

  getProducts() {
    return this.products;
  }
}
