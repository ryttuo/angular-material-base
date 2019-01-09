import * as LayoutActions from './layout.actions';

export interface LayoutState {
    showSidenav: boolean;
}

const initialState: LayoutState = {
    showSidenav: false,
};

export function reducer(state: LayoutState = initialState, action: LayoutActions.LayoutActions): LayoutState {
    switch (action.type) {
        case LayoutActions.LayoutActionTypes.CloseSidenav:
            return {
                showSidenav: false,
            };

        case LayoutActions.LayoutActionTypes.OpenSidenav:
            return {
                showSidenav: true,
            };

        default:
            return state;
    }
}
