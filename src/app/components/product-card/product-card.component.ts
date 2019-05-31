import {Component, Input, OnInit} from '@angular/core';
import {ProductInterface} from '../../models/product.interface';

@Component({
  selector: 'pow-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: ProductInterface;

  constructor() { }

  ngOnInit() {
  }

}
