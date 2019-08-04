import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const IconButton = ({ onPress, iconName, iconSize }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.containerStyle}>
                <View style={styles.iconStyle}>
                    <Icon name={iconName} size={iconSize} color='#F15A23' />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = {
    containerStyle: {
        backgroundColor:'#FFF',
        borderColor: '#FFF',
        padding:8,
        borderRadius:28,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        // elevation: 1
    },
    iconStyle: {
        padding:5,
        borderRadius:20,
        backgroundColor:'#F15A23'
    }
};

export { IconButton };