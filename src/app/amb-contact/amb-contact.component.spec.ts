import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbContactComponent } from './amb-contact.component';

describe('AmbContactComponent', () => {
  let component: AmbContactComponent;
  let fixture: ComponentFixture<AmbContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
