import React from 'react';
import {Text} from 'react-native';

function Inter(props) {
    return (
        <Text style={{fontFamily: 'Inter', fontSize: 16, fontStyle: 'normal'}}>{props.children}</Text>
    )
}

export default Inter;