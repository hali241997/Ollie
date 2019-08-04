import React from 'react';
import {View, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

const FloatingActionButton = ({onPress}) => {
    return(
        <TouchableOpacity style={styles.containerStyle} onPress={onPress}>
            <Icon name='plus-a' size={30} color='#FFF' />
        </TouchableOpacity>
    );
}

const styles = {
    containerStyle: {
        width:40,
        height:40,
        backgroundColor:'#F15A22',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        position: 'absolute',
        right:30,
        top:(Dimensions.get('window').height)-30-40
    }
};

export {FloatingActionButton};