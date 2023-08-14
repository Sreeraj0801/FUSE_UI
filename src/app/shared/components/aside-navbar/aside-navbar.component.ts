import { Component } from '@angular/core';

@Component({
  selector: 'app-aside-navbar',
  templateUrl: './aside-navbar.component.html',
  styleUrls: ['./aside-navbar.component.css']
})
export class AsideNavbarComponent {
  open: boolean = true;
  menus = [
    { name: 'home', link: '/home', icon: '🏠' },
    { name: 'workspaces', link: '/workspace', icon: '🖥️' },
    // { name: 'messages', link: '/chat', icon: '🗪', margin: true },
  ];
  constructor() {}

  toggleOpen() {
    this.open = !this.open;
  }

  handleLogout() { }

}
