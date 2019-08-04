import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentDidMount() {
        const firebaseConfig = {
            apiKey: "AIzaSyDMygbizZEgwKvsAGhl_mVVVjk59TCp6xo",
            authDomain: "ollie-3bbbb.firebaseapp.com",
            databaseURL: "https://ollie-3bbbb.firebaseio.com",
            projectId: "ollie-3bbbb",
            storageBucket: "",
            messagingSenderId: "175813199700",
            appId: "1:175813199700:web:d19d0cf727200670"
          };
          firebase.initializeApp(firebaseConfig);
    }

    render() {
        return(
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}

export default App;