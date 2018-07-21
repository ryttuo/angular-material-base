import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbContentComponent } from './amb-content.component';

describe('AmbContentComponent', () => {
  let component: AmbContentComponent;
  let fixture: ComponentFixture<AmbContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
