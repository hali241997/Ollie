import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Card = (props) => {
    return (
        <View>
            <View style={styles.containerStyle}>
                <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                    <Text style={[styles.textStyle, props.style]}>{props.heading}</Text>
                    <View style={{position:'absolute', left:(Dimensions.get('window').width)/2, top: 20}}>
                        <Icon name={props.iconName} size={30} color='#F15A23' />
                    </View>
                </View>
                {props.children}
            </View>
            <View style={styles.iconContainerStyle}>
                <TouchableOpacity onPress={props.onPress}>
                    <Icon name='arrow-right-circle' size={55} color='#F15A23' />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = {
    containerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        padding: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 120,
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
        marginBottom: 10,
        marginTop: 10,
    },
    iconContainerStyle: {
        backgroundColor:'#FFF',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        bottom: -35,
        left: ((Dimensions.get('window').width)/2)-35,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 5
    }
};

export {Card};