import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmbListComponent } from './amb-list.component';

const routes: Routes = [
  { path : '', component : AmbListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmbListRoutingModule { }
