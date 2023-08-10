import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { VerifyPageComponent } from './verify-page.component';
import { VerifyPageService } from './verify-page.service';

const route: Routes = [{ path: '', component: VerifyPageComponent ,title:'FUSE | Verify'}];

@NgModule({
  declarations: [VerifyPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    HttpClientModule,
    RouterModule.forChild(route),
  ],
  providers:[VerifyPageService]
})
export class VerifyPageModule {}
