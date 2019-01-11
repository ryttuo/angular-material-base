import { Action } from '@ngrx/store';

export enum LayoutActionTypes {
  OpenSidenav = '[Layout] Open Sidenav',
  CloseSidenav = '[Layout] Close Sidenav',
  SetAppTitle = '[Layout] Set App Title',
}

export class OpenSidenav implements Action {
  readonly type = LayoutActionTypes.OpenSidenav;
}

export class CloseSidenav implements Action {
  readonly type = LayoutActionTypes.CloseSidenav;
}

export class SetAppTitle implements Action {
  readonly type = LayoutActionTypes.SetAppTitle;
  constructor(public payload: string) {
  }
}


export type LayoutActions = OpenSidenav | CloseSidenav | SetAppTitle;
