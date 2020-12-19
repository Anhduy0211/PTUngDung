import React from 'react';
import {View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

interface NextProps {
    active: boolean
    onPress: () => void
}

// function Next({active,onPress}:NextProps) {
//     return(
//        <View>
//           <Icon.Button onPress={onPress} name="facebook" >

//           </Icon.Button>
//        </View>
//     )
// }
const Next = ({onPress}:NextProps)=>{
    return(
        <View>
             <Icon name="arrow-right" size={20} onPress={onPress}/>
        </View>
       
    )
}
export default Next;