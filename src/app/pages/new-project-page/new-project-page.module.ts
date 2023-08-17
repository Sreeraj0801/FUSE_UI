import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProjectPageComponent } from './new-project-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NewProjectService } from './new-project.service';
import { NgxColorsModule } from 'ngx-colors';
import { ComponentsModule } from 'src/app/shared/components/components.module';
const route:Routes = [{path:'',component:NewProjectPageComponent,title:'FUSE | New Project'}]

@NgModule({
  declarations: [NewProjectPageComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    NgxColorsModule,
    RouterModule.forChild(route)
  ],providers:[NewProjectService]
})
export class NewProjectPageModule { }
