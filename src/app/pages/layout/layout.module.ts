import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { LayoutRoutingModule } from './layout-routing.module';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    LayoutRoutingModule,
  ],
  providers:[],
})
export class LayoutModule { }
