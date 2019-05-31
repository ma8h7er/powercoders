import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../providers/menu.service';
import {MenuInterface} from '../../models/menu.interface';

@Component({
  selector: 'pow-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menu: MenuInterface[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.getMenu();
  }

  getActiveClass(i) {
    return i == 0 ? 'active' : '';
  }
}
