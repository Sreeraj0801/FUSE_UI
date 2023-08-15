import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { PageNotFoundComponent } from './page-not-found.component';
import { RouterModule, Routes } from '@angular/router';

const route:Routes = ([{path:'',component:PageNotFoundComponent}])


@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(route)
  ]
})
export class PageNotFoundModule { }
