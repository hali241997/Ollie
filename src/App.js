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
            apiKey: "Your API Key",
            authDomain: "Your auth Domain",
            databaseURL: "Your database URL",
            projectId: "Your project ID",
            storageBucket: "Your storage bucket",
            messagingSenderId: "Your messaging ID",
            appId: "You App ID"
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
