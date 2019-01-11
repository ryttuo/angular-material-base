import * as LayoutActions from './layout.actions';

export interface LayoutState {
    showSidenav: boolean;
    appTitle: string;
}

const initialState: LayoutState = {
    showSidenav: false,
    appTitle: 'home',
};

export function reducer(state: LayoutState = initialState, action: LayoutActions.LayoutActions): LayoutState {
    switch (action.type) {
        case LayoutActions.LayoutActionTypes.CloseSidenav:
            return Object.assign({}, state, {
                showSidenav: false
            });
        case LayoutActions.LayoutActionTypes.OpenSidenav:
        return Object.assign({}, state, {
            showSidenav: true
        });
        case LayoutActions.LayoutActionTypes.SetAppTitle:
        return Object.assign({}, state, {
            appTitle: action.payload
        });

        default:
            return state;
    }
}
