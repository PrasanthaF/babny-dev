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
      {label: 'Stats', icon: 'fa-bar-chart', routerLink: ['/babyname']},
      {label: 'Calendar', icon: 'fa-calendar'},
      {label: 'Documentation', icon: 'fa-book'},
      {label: 'Support', icon: 'fa-support'},
      {label: 'Social', icon: 'fa-twitter'}
  ];

  }
}
