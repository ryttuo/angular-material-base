import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmbListRoutingModule } from './amb-list-routing.module';
import { AmbListComponent } from './amb-list.component';
import { MaterialModule } from '../shared/material/material.module';
import { AmbTableComponent } from '../shared/components/amb-table/amb-table.component';

@NgModule({
  imports: [
    CommonModule,
    AmbListRoutingModule,
    MaterialModule,
  ],
  declarations: [AmbListComponent, AmbTableComponent]
})
export class AmbListModule { }
