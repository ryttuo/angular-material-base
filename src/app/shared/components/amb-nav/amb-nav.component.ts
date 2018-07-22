import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'amb-nav',
  templateUrl: './amb-nav.component.html',
  styleUrls: ['./amb-nav.component.scss']
})
export class AmbNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe('(max-width: 767px)')
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  }
