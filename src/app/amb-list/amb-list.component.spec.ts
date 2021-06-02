import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AmbListComponent } from './amb-list.component';

describe('AmbListComponent', () => {
  let component: AmbListComponent;
  let fixture: ComponentFixture<AmbListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
