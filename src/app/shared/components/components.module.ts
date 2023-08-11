import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { ButtonComponent } from './button/button.component';
import { AsideNavbarComponent } from './aside-navbar/aside-navbar.component';
import { RouterModule } from '@angular/router';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { HomeCardComponent } from './home-card/home-card.component';

@NgModule({
  declarations: [
    LogoComponent,
    ButtonComponent,
    AsideNavbarComponent,
    MobileNavComponent,
    NavbarComponent,
    NavButtonComponent,
    HomeCardComponent,
  ],
  exports: [
    LogoComponent,
    ButtonComponent,
    AsideNavbarComponent,
    MobileNavComponent,
    NavbarComponent,
    NavButtonComponent,
    HomeCardComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class ComponentsModule {}
