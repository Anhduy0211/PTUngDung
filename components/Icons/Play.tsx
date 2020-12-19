import React from 'react';
import {View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

interface PlayProps {
    active: boolean
    onPress: () => void
}

function Play({onPress}:PlayProps) {
    return(
        <View>

            <Icon name="refresh" size={20} onPress={onPress}/>
        </View>
    )
}
export default Play;