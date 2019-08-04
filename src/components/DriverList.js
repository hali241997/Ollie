import React, {Component} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Header, FloatingActionButton } from './common';
import { Actions } from 'react-native-router-flux';

class DriverList extends Component {
    buttonPressed() {
        Actions.addDriver();
    }

    render() {
        return(
            <View>
                <Header headerText='Ollie' />
                <View style={styles.containerStyle}>
                    <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                        <Text style={styles.textStyle}>HOME</Text>
                        <View style={{position:'absolute', left:(Dimensions.get('window').width)/2, top: 20}}>
                            <Icon name='power' size={30} color='#F15A23' />
                        </View>
                    </View>
                </View>

                <View style={{alignItems:'center', justifyContent:'center', marginTop: 20}}>
                    <Image
                        source={require('../assets/img.jpg')}
                        style={{width:250, height:250, borderRadius:125}}
                    />
                </View>

                <FloatingActionButton onPress={this.buttonPressed.bind(this)} />
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        padding: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 135,
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
    },
    textStyle: {
        fontSize: 40,
        color: '#F15A23',
        marginBottom: 15,
        marginTop: 10,
    }
};

export default DriverList;