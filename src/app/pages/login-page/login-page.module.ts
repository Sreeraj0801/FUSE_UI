import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';


const route:Routes = ([{path:'',component:LoginPageComponent}])

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(route),
  ]
})
export class LoginPageModule { }
