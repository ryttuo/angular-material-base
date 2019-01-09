import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbHomeComponent } from './amb-home.component';

describe('AmbHomeComponent', () => {
  let component: AmbHomeComponent;
  let fixture: ComponentFixture<AmbHomeComponent>;

  beforeEach(async(() => {
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
