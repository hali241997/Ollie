import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import DriverReducer from './DriverReducer';

export default combineReducers({
    auth: AuthReducer,
    driver: DriverReducer
});