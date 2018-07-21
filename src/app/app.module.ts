import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule, MatChipsModule, MatExpansionModule } from '@angular/material';
import { AmbNavComponent } from './shared/components/amb-nav/amb-nav.component';
import { AmbDashboardComponent } from './shared/components/amb-dashboard/amb-dashboard.component';
import { AmbTableComponent } from './shared/components/amb-table/amb-table.component';
import { AmbHeaderComponent } from './amb-header/amb-header.component';
import { AmbContentComponent } from './amb-content/amb-content.component';
import { AmbFooterComponent } from './amb-footer/amb-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AmbNavComponent,
    AmbDashboardComponent,
    AmbTableComponent,
    AmbHeaderComponent,
    AmbContentComponent,
    AmbFooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
