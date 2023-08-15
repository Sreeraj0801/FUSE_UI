import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WorkspacePageComponent } from './workspace-page.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { WorspacePageService } from './worspace-page.service';

const routes:Routes = [{path:'',component:WorkspacePageComponent}];

@NgModule({
  declarations: [WorkspacePageComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers:[WorspacePageService]
})
export class WorkspacePageModule { }
