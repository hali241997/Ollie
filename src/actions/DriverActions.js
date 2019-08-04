import firebase from 'firebase';
import {DRIVER_UPDATE, DRIVER_CREATE} from '../actions/types';
import { Actions } from 'react-native-router-flux';

export const driverUpdate = ({prop, value}) => {
    return {
        type: DRIVER_UPDATE,
        payload: {prop, value}
    };
};

export const driverCreate = ({name, emph, pass, age, location, masterCode}) => {
    return(dispatch) => {
        const {currentUser} = firebase.auth();
        firebase.database().ref(`/users/${currentUser.uid}/drivers`)
            .push({name, emph, pass, age, location, masterCode})
            .then(() => {
                dispatch({type: DRIVER_CREATE})
                Actions.pop();
                Actions.pop();
            });
    };
};