import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {driverUpdate} from '../actions';
import { Header, Card, Input } from './common';
import { Actions } from 'react-native-router-flux';
import RadioForm from 'react-native-simple-radio-button';

var radio_props = [
    {label: 'Male', value: 0 },
    {label: 'Female', value: 1 }
];

class AddDriver extends Component {
    fabPressed() {
        Actions.masterCode();
    }

    render() {
        return(
            <View>
                <Header headerText='Ollie' />
                <Card heading='REGISTER' onPress={this.fabPressed.bind(this)} style={{marginBottom:5, marginTop:0}}>
                    <Input
                        style={{marginBottom:7}}
                        iconName='account'
                        placeholder='Name'
                        value={this.props.name}
                        onChangeText={value => this.props.driverUpdate({prop:'name', value})}
                    />

                    <Input
                        style={{marginBottom:7}}
                        iconName='email-outline'
                        placeholder='Phone/Email'
                        value={this.props.emph}
                        onChangeText={value => this.props.driverUpdate({prop:'emph', value})}
                    />

                    <Input
                        style={{marginBottom:7}}
                        secureTextEntry
                        iconName='lock-outline'
                        placeholder='Password'
                        value={this.props.pass}
                        onChangeText={value => this.props.driverUpdate({prop:'pass', value})}
                    />

                    <Input
                        style={{marginBottom:7}}
                        iconName='account'
                        placeholder='Age'
                        value={this.props.age}
                        onChangeText={value => this.props.driverUpdate({prop:'age', value})}
                    />

                    <Input
                        style={{marginBottom:7}}
                        iconName='map-marker'
                        placeholder='Location'
                        value={this.props.location}
                        onChangeText={value => this.props.driverUpdate({prop:'location', value})}
                    />

                    <RadioForm
                        radio_props={radio_props}
                        initial={-1}
                        formHorizontal={true}
                        radioStyle={{paddingRight:40, marginLeft: 30, marginBottom:15}}
                        buttonColor='#F15A22'
                        selectedButtonColor='#F15A22'
                        onPress={value => this.props.driverUpdate({prop:'gender', value})}
                    />
                </Card>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, emph, pass, age, location, gender} = state.driver;
    return {name, emph, pass, age, location, gender};
};

export default connect(mapStateToProps, {driverUpdate})(AddDriver);