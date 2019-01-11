import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../core/appState';
import { SetAppTitle } from '../core/layout/layout.actions';

@Component({
  selector: 'amb-list',
  templateUrl: './amb-list.component.html',
  styleUrls: ['./amb-list.component.scss']
})
export class AmbListComponent implements OnInit {

  constructor(private layoutStore: Store<AppState>) { }

  ngOnInit() {

    this.layoutStore.dispatch(new SetAppTitle('list'));

  }

}
