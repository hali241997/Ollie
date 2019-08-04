import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
    return (
        <View style={styles.spinnerSyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};

const styles = {
    spinnerSyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
};

export { Spinner };