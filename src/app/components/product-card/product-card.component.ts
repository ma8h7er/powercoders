import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductInterface} from '../../models/product.interface';

@Component({
  selector: 'pow-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: ProductInterface;
  @Output() onBuy: EventEmitter<ProductInterface> = new EventEmitter<ProductInterface>();

  constructor() { }

  ngOnInit() {
  }

  onBuyProduct() {
    this.onBuy.emit(this.product);
  }
}
