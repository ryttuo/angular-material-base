
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbDashboardComponent } from './amb-dashboard.component';

describe('AmbDashboardComponent', () => {
  let component: AmbDashboardComponent;
  let fixture: ComponentFixture<AmbDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
