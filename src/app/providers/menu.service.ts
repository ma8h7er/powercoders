import { Injectable } from '@angular/core';
import {MenuInterface} from '../models/menu.interface';

@Injectable()
export class MenuService {
  private menu: MenuInterface[] = [
    {
      id: 1,
      title: 'Home'
    },
    {
      id: 2,
      title: 'Abount'
    },
    {
      id: 3,
      title: 'Clothes'
    },
    {
      id: 4,
      title: 'Contact us0'
    }
  ];

  constructor() { }

  getMenu(): MenuInterface[] {
    return this.menu;
  }
}
