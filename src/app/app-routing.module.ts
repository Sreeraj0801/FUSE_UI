import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';
import { IsLoggedInService } from './shared/guards/is-logged-in.service';

const routes: Routes = [
  {
    path: 'fuse',
    loadChildren: () =>
      import('./pages/landing-page/landing-page.module').then(
        (m) => m.LandingPageModule
      ),
    title: 'FUSE | Project Management plaform',
    canActivate: [IsLoggedInService],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login-page/login-page.module').then(
        (m) => m.LoginPageModule
      ),
    title: 'FUSE | Login',
    canActivate: [IsLoggedInService],
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register-page/register-page.module').then(
        (m) => m.RegisterPageModule
      ),
    canActivate: [IsLoggedInService],
  },
  {
    path: 'verifyUser/:token/:id',
    loadChildren: () =>
      import('./pages/verify-page/verify-page.module').then(
        (m) => m.VerifyPageModule
      ),
    canActivate: [IsLoggedInService],
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/layout/layout.module').then((m) => m.LayoutModule),
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
