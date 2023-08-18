import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WpInvitationPageComponent } from './wp-invitation-page.component';
import { RouterModule, Routes } from '@angular/router';


const route:Routes = [{path:'',component:WpInvitationPageComponent}];
@NgModule({
  declarations: [WpInvitationPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class WpInvitationPageModule { }
