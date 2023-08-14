import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { HomePageService } from './home-page.service';

const route:Routes = ([{path:'',component:HomePageComponent,title:'FUSE | Home'}]);

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    HttpClientModule,
    RouterModule.forChild(route),
  ],providers:[HomePageService]
})
export class HomePageModule { }
