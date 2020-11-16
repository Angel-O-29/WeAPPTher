import {SET_MENU_DISPLAY} from './../actions';

export const menu = (state = {}, action) => {
    switch (action.type) {

        case SET_MENU_DISPLAY:
            return {...state, display: action.value};

        default:
            return state;
    }
}