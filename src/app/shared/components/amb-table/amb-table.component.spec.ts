
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbTableComponent } from './amb-table.component';

describe('AmbTableComponent', () => {
  let component: AmbTableComponent;
  let fixture: ComponentFixture<AmbTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
