import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbHeaderComponent } from './amb-header.component';

describe('AmbHeaderComponent', () => {
  let component: AmbHeaderComponent;
  let fixture: ComponentFixture<AmbHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
