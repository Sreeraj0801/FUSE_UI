import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { RegisterPageComponent } from './register-page.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { FormsModule } from '@angular/forms';
import { RegisterService } from './register.service';
import { HttpClientModule } from '@angular/common/http';


const route:Routes = ([{path:'',component:RegisterPageComponent,title:'FUSE | Register'}]);

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    HttpClientModule,
    RouterModule.forChild(route),
  ],providers:[RegisterService]
})
export class RegisterPageModule { }
