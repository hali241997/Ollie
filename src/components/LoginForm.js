import React, {Component} from 'react';
import {View, StatusBar, Text} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions'
import {Card, Header, Input, TextClick, Spinner} from './common';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onNextPress() {
        const {email, password} = this.props;
        this.props.loginUser({email, password});
    }

    renderError() {
        if(this.props.loading) {
            return <Spinner size='large' />
        }
        else if(this.props.error) {
            return(
                <View>
                    <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                </View>
            );
        }
    }

    render() {
        return(
            <View>
                <StatusBar hidden />
                <Header headerText='Ollie'/>
                <Card heading='LOGIN' onPress={this.onNextPress.bind(this)}>
                    <Input
                        placeholder="Email Address"
                        iconName='email-outline'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />

                    <Input
                        secureTextEntry
                        placeholder="Password"
                        iconName='lock-outline'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                    
                    {this.renderError()}

                    <TextClick style={styles.textClickStyle} text='Forgot Password?' />
                </Card>
            </View>
        );
    }
}

const mapStateToProp = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

const styles = {
    textClickStyle: {
        alignSelf: 'flex-end',
        marginRight: 20,
        marginBottom: 40,
        marginTop: 20
    },
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
    }
};

export default connect(mapStateToProp, {emailChanged, passwordChanged, loginUser})(LoginForm);