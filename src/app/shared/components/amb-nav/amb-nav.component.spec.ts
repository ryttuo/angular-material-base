
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbNavComponent } from './amb-nav.component';

describe('AmbNavComponent', () => {
  let component: AmbNavComponent;
  let fixture: ComponentFixture<AmbNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
