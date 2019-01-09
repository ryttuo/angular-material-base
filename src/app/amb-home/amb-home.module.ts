import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmbHomeRoutingModule } from './amb-home-routing.module';
import { AmbHomeComponent } from './amb-home.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    AmbHomeRoutingModule,
    MaterialModule,

  ],
  declarations: [AmbHomeComponent]
})
export class AmbHomeModule { }
