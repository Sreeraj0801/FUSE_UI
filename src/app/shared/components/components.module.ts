import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [LogoComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [LogoComponent, ButtonComponent],
})
export class ComponentsModule {}
