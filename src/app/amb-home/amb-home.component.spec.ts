import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AmbHomeComponent } from './amb-home.component';

describe('AmbHomeComponent', () => {
  let component: AmbHomeComponent;
  let fixture: ComponentFixture<AmbHomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
