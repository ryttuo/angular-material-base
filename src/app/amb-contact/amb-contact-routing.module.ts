import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmbContactComponent } from './amb-contact.component';

const routes: Routes = [
  { path : '', component : AmbContactComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmbContactRoutingModule { }
