import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AmbFooterComponent } from './amb-footer.component';

describe('AmbFooterComponent', () => {
  let component: AmbFooterComponent;
  let fixture: ComponentFixture<AmbFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
