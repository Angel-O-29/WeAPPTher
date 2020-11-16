import {SET_UNITS} from './../actions';

export const units = (state = {}, action) => {
    switch (action.type) {

        case SET_UNITS:
            return {...state, inUse: action.value};

        default:
            return state;
    }
}