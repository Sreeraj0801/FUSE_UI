import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';
import { NavButtonComponent } from 'src/app/shared/components/nav-button/nav-button.component';

const routes: Routes = [{path:'',component:LandingPageComponent}];

@NgModule({
  declarations: [LandingPageComponent,LogoComponent,NavButtonComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LandingPageModule { }
