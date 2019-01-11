import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../core/appState';
import { OpenSidenav, CloseSidenav } from '../core/layout/layout.actions';

@Component({
  selector: 'amb-home',
  templateUrl: './amb-home.component.html',
  styleUrls: ['./amb-home.component.scss']
})
export class AmbHomeComponent implements OnInit {

  constructor(private layoutStore: Store<AppState>) { }

  ngOnInit() {
  }

  open() {
    this.layoutStore.dispatch(new OpenSidenav);
  }

}
