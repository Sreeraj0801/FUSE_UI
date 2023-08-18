import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageService } from './home-page.service';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { RouterModule, Routes } from '@angular/router';

const route:Routes = ([{path:'',component:HomePageComponent}]);

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule, 
    ComponentsModule,
    RouterModule.forChild(route)
  ],
  providers:[HomePageService]
})
export class HomePageModule { }
