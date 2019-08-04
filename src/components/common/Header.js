import React from 'react';
import { Text, View, Dimensions } from 'react-native';

const Header = ({headerText}) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F15A23',
        justifyContent: 'center',
        alignItems: 'center',
        height: 220,
        paddingBottom: 50,
        position: 'absolute',
        top: 0,
        left: 0,
        width: Dimensions.get('window').width
    },
    textStyle: {
        fontSize: 60,
        color:'#FFF',
        marginBottom: 40
    }
}

// Make component available to the other parts of the app
export { Header };