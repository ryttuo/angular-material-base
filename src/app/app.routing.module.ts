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
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
