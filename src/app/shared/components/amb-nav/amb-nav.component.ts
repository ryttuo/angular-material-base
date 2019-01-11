import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState, showSidenav, getAppTitle } from 'src/app/core/appState';
import { OpenSidenav, CloseSidenav } from 'src/app/core/layout/layout.actions';

@Component({
  selector: 'amb-nav',
  templateUrl: './amb-nav.component.html',
  styleUrls: ['./amb-nav.component.scss']
})
export class AmbNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe('(max-width: 767px)')
    .pipe(
      map(result => result.matches)
    );
  showSideNav$: Observable<boolean>;
  appTitle$: Observable<string>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private layoutStore: Store<AppState>,
  ) { }

  ngOnInit() {
    this.showSideNav$ = this.layoutStore.select(showSidenav);
    this.appTitle$ = this.layoutStore.select(getAppTitle);
  }


  openSideNav() {

    this.layoutStore.dispatch(new OpenSidenav);

  }

  closeSideNav() {

    this.layoutStore.dispatch(new CloseSidenav);

  }


}
