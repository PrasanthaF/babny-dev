import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'babny-main-tab-menu',
  templateUrl: './babny-main-tab-menu.component.html',
  styleUrls: ['./babny-main-tab-menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BabnyMainTabMenuComponent implements OnInit {

  private items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'By Name', icon: 'fa-bar-chart', routerLink: ['/welcome']},
      {label: 'By Gender', icon: 'fa-calendar', routerLink: ['/welcome']},
      {label: 'By Origin', icon: 'fa-book', routerLink: ['/welcome']},
      {label: 'By Theme', icon: 'fa-support', routerLink: ['/welcome']}
  ];
 
  }
}
