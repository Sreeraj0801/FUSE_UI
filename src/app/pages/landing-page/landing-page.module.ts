import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';

const routes: Routes = [{path:'',component:LandingPageComponent}];

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ]
})
export class LandingPageModule { }
