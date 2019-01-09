import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmbHomeComponent } from './amb-home.component';

const routes: Routes = [
  { path: '', component : AmbHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmbHomeRoutingModule { }
