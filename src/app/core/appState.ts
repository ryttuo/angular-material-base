import * as layout from '../core/layout/layout.reducers';
import { createSelector } from '@ngrx/store';


export interface AppState {
    layout: layout.LayoutState;
}

export const reducers = {
    layout: layout.reducer,
};

export const getLayoutState = (state: AppState) => {
    return state.layout;
};

export const showSidenav = createSelector(getLayoutState, (state: layout.LayoutState) => state.showSidenav);

export const getAppTitle = createSelector(getLayoutState, (state: layout.LayoutState) => state.appTitle);
