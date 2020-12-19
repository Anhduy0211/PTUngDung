import React from 'react';

import {RectButton} from 'react-native-gesture-handler'
import {StyleSheet,Text} from 'react-native';
import { elevate } from 'react-native-elevate'

interface ButtonProp{
    key:number;
    answer:string;
    onPress:()=> void;
    correct:boolean;
    disabled:boolean
}

const Button=({answer, onPress,correct,disabled}:ButtonProp) =>{
    
    return(
        
        <RectButton style={[styles.container,elevate(5),{backgroundColor:correct?'#64b5f6':'#fff'}]}  {...{onPress}} >
                <Text style={{...styles.label,color:correct?"blue":"black",}}>
                    
                   {answer}
                </Text>
        </RectButton>
    )
}

const styles =StyleSheet.create({
    container:{
        height:43,
        width:"100%",
        alignItems:"center",
        flexDirection:"row",
        marginBottom:14,
        paddingHorizontal:13,
        borderRadius:2,
        backgroundColor:"#fff"
    },
    label:{
        fontSize:16,
        textAlign:'center',
        justifyContent:'center',
        alignItems:"center",
        color:"#000",
        textTransform:"capitalize"
    }
})
export default Button;
