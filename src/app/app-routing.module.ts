import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {path:'fuse' ,     loadChildren:() => import('./pages/landing-page/landing-page.module').then(m => m.LandingPageModule), title:'FUSE | Project Management plaform' ,},
  {path:'login' ,    loadChildren:() => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule),       title:'FUSE | Login'},
  {path:'register' , loadChildren:() => import('./pages/register-page/register-page.module').then(m => m.RegisterPageModule)},
  {path:'workspace/verifyworkspaceinvitation/:workspaceId/:email/:choice' , loadChildren:() => import('./pages/wp-invitation-page/wp-invitation-page.module').then(m => m.WpInvitationPageModule)},
  {path:'verifyUser/:token/:id' ,loadChildren:() => import('./pages/verify-page/verify-page.module').then(m => m.VerifyPageModule)},
  {path:'' ,         loadChildren:() => import('./pages/layout/layout.module').then(m => m.LayoutModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
