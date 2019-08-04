import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import DriverList from './components/DriverList';
import AddDriver from './components/AddDriver';
import MasterCode from './components/MasterCode';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key='root'>
                <Scene key='auth' hideNavBar>
                    <Scene key='login' component={LoginForm} />
                </Scene>
                <Scene key='main' hideNavBar>
                    <Scene key='driverList' component={DriverList} initial />
                    <Scene key='addDriver' component={AddDriver} />
                    <Scene key='masterCode' component={MasterCode} />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;