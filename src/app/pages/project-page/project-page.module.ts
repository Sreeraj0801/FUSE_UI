import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectPageComponent } from './project-page.component';
import { ProjectPageService } from './project-page.service';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { NgCircleProgressModule } from 'ng-circle-progress';



const routes:Routes = [{path:'',component:ProjectPageComponent}]
@NgModule({
  declarations: [ProjectPageComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  providers:[ProjectPageService]
})
export class ProjectPageModule { }
