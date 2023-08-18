import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxColorsModule } from 'ngx-colors';


import { LogoComponent } from './logo/logo.component';
import { ButtonComponent } from './button/button.component';
import { AsideNavbarComponent } from './aside-navbar/aside-navbar.component';
import { RouterModule } from '@angular/router';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { ModalComponent } from './modal/modal.component';
import { BadgesComponent } from './badges/badges.component';
import { InviteMembersComponent } from './invite-members/invite-members.component';
import { CreateWorkspaceComponent } from './create-workspace/create-workspace.component';

@NgModule({
  declarations: [
    LogoComponent,
    ButtonComponent,
    AsideNavbarComponent,
    MobileNavComponent,
    NavbarComponent,
    NavButtonComponent,
    HomeCardComponent,
    ModalComponent,
    BadgesComponent,
    InviteMembersComponent,
    CreateWorkspaceComponent,
  ],
  exports: [
    LogoComponent,
    ButtonComponent,
    AsideNavbarComponent,
    MobileNavComponent,
    NavbarComponent,
    NavButtonComponent,
    HomeCardComponent,
    ModalComponent,
    BadgesComponent,
    InviteMembersComponent,
    CreateWorkspaceComponent,
  ],
  imports: [CommonModule, RouterModule,FormsModule,NgxColorsModule,  ],
})
export class ComponentsModule {}
