import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../providers/menu.service';
import {MenuInterface} from '../../models/menu.interface';

@Component({
  selector: 'pow-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  menu: MenuInterface[];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.getMenu();
  }

}
