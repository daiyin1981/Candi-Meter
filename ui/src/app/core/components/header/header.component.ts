import { Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  @Input() sideNavItem: MatSidenav;
  constructor() { }

  clickMenu() {
    this.sideNavItem.toggle();
  }
}
