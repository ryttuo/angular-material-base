import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../core/appState';
import { SetAppTitle } from '../core/layout/layout.actions';

@Component({
  selector: 'amb-contact',
  templateUrl: './amb-contact.component.html',
  styleUrls: ['./amb-contact.component.scss']
})
export class AmbContactComponent implements OnInit {

  options: FormGroup;

  constructor(private fb: FormBuilder, private layoutStore: Store<AppState>) { }

  ngOnInit() {

    this.layoutStore.dispatch(new SetAppTitle('contact'));

    this.options = this.fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });

  }

}
