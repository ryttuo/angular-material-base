import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  // {
  //     path: '',
  //     pathMatch: 'full',
  //     loadChildren: './amb-home/amb-home.module#AmbHomeModule'
  // },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: './amb-home/amb-home.module#AmbHomeModule'
  },
  {
    path: 'contact',
    pathMatch: 'full',
    loadChildren: './amb-contact/amb-contact.module#AmbContactModule'
  },
  {
    path: 'list',
    pathMatch: 'full',
    loadChildren: './amb-list/amb-list.module#AmbListModule'
  },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
