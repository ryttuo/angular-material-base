import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AmbContactComponent } from './amb-contact.component';

describe('AmbContactComponent', () => {
  let component: AmbContactComponent;
  let fixture: ComponentFixture<AmbContactComponent>;

  beforeEach(waitForAsync(() => {
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
