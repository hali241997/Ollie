import React from 'react';
import { TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Input = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
            <View style={styles.iconStyle}>
                <Icon name={props.iconName} size={30} color='#BBBBBB' />
            </View>
            <TextInput
                style={styles.inputStyle}
                placeholder={props.placeholder}
                autoCorrect={false}
                secureTextEntry={props.secureTextEntry}
                value={props.value}
                onChangeText={props.onChangeText}
            />
        </View>
    );
};

const styles = {
    containerStyle: {
        flexDirection:'row',
        borderColor:'#E3E3E3',
        borderWidth:2,
        borderRadius:30,
        marginStart:20,
        marginEnd:20,
        marginBottom: 10,
        height: 55
    },
    iconStyle: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:20
    },
    inputStyle : {
        flex:6,
        fontSize:20,
        marginEnd: 16,
        color:'#000'
    }
};

export { Input };