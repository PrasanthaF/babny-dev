import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'babny-side-menu',
  templateUrl: './babny-side-menu.component.html',
  styleUrls: ['./babny-side-menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BabnySideMenuComponent implements OnInit {

  menuItems: MenuItem[];

  constructor() { }

  ngOnInit() {

    this.menuItems = [
      { label: 'Dashboard', icon: 'fa-home', routerLink: ['/dashboard'] },
      { label: 'All Times', icon: 'fa-calendar', routerLink: ['/alltimes'] },
      { label: 'My Timesheet', icon: 'fa-clock-o', routerLink: ['/timesheet'] },
      { label: 'Add Project', icon: 'fa-tasks', routerLink: ['/projects'] },
      { label: 'My Profile', icon: 'fa-users', routerLink: ['/profile'] },
      { label: 'Settings', icon: 'fa-sliders', routerLink: ['/settings'] }
    ];
  }

}
