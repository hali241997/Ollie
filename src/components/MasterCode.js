import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {driverUpdate, driverCreate} from '../actions';
import { Header, Card, Input } from './common';
import Toast from 'react-native-root-toast';

class MasterCode extends Component {
    createDriver() {
        const {name, emph, pass, age, location, gender, masterCode} = this.props;
        this.props.driverCreate({name, emph, pass, age, location, gender, masterCode});

        <Toast
                    position={0}
                    shadow={false}
                    animation={false}
                    hideOnPress={true}
                >Added</Toast>
    }

    render() {
        return(
            <View>
                <Header headerText='Ollie' />
                <Card heading='MASTER CODE' onPress={this.createDriver.bind(this)}>
                    <Input
                        style={{marginTop:40, marginBottom:60}}
                        iconName='lock-outline'
                        placeholder='SET MASTER CODE'
                        value={this.props.masterCode}
                        onChangeText={value => this.props.driverUpdate({prop:'masterCode', value})}
                    />
                </Card>

                
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, emph, pass, age, location, gender, masterCode} = state.driver;
    return {name, emph, pass, age, location, gender, masterCode};
}

export default connect(mapStateToProps, {driverUpdate, driverCreate})(MasterCode);