import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'amb-contact',
  templateUrl: './amb-contact.component.html',
  styleUrls: ['./amb-contact.component.scss']
})
export class AmbContactComponent implements OnInit {

  options: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.options = this.fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });

  }

}
