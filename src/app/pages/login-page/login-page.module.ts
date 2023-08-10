import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { FormsModule } from '@angular/forms';
import { LoginPageService } from './login-page.service';
import {HttpClientModule} from '@angular/common/http';

const route:Routes = ([{path:'',component:LoginPageComponent}])

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    HttpClientModule,
    RouterModule.forChild(route),
  ],providers:[LoginPageService]
})
export class LoginPageModule { }
