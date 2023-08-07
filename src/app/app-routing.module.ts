import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'' ,loadChildren:() => import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule),title:'FUSE | Project Management plaform'},
  { path:'login' ,loadChildren:() => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule),title:'FUSE | Login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
