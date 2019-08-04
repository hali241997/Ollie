import {DRIVER_UPDATE, DRIVER_CREATE, LOADING} from '../actions/types';

const INITIAL_STATE = {name: '', emph: '', pass: '', age: '', location: '', gender: -1, masterCode: ''};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case DRIVER_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value};
        case DRIVER_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
};