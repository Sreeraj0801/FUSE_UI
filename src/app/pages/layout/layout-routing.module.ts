import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    title: 'FUSE | Layout' ,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home-page/home-page.module').then(m => m.HomePageModule), 
         title: 'FUSE | Home' ,
      },
      { path: '', redirectTo: '/fuse', pathMatch: 'full' },
      {path:'workspace',
      loadChildren:() => import('../workspace-page/workspace-page.module').then(m => m.WorkspacePageModule),title:'FUSE | Workspace'},
      {path:'project/create',loadChildren:()=> import('../new-project-page/new-project-page.module').then(m => m.NewProjectPageModule)},
      {path:'project/:projectId/:category',loadChildren:()=> import('../project-page/project-page.module').then(m => m.ProjectPageModule)},
      { path: '**', loadChildren:() => import('../page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
