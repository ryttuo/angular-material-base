import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
      path: '',
      pathMatch: 'full',
      loadChildren: () => import('./amb-home/amb-home.module').then(m => m.AmbHomeModule)
  },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: () => import('./amb-home/amb-home.module').then(m => m.AmbHomeModule)
  },
  {
    path: 'contact',
    pathMatch: 'full',
    loadChildren: () => import('./amb-contact/amb-contact.module').then(m => m.AmbContactModule)
  },
  {
    path: 'list',
    pathMatch: 'full',
    loadChildren: () => import('./amb-list/amb-list.module').then(m => m.AmbListModule)
  },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
