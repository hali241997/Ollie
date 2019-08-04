import React from 'react'
import {Text, TouchableOpacity} from 'react-native';

const TextClick = (props) => {
    return(
        <TouchableOpacity style={[props.style]}>
            <Text style={{color:'#B6756B', fontSize:15}}>{props.text}</Text>
        </TouchableOpacity>
    );
}

export { TextClick }