import React from 'react';

import{StyleSheet,View,Text} from 'react-native';

interface QuestionProps{
  questionNR:number,
  question:string
}

function Question({questionNR,question}:QuestionProps){
    return (
<View style={styles.mediumcontainer}>
        <Text style={{color:"#006996",fontSize:16,marginRight:10}}>
          {questionNR}
        </Text>

        <Text style={{color:"#000", textAlign:"left",fontSize:16}}>
          {question}
        </Text>
      </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      position:'relative',
      padding:20,
      fontFamily:'Times',
    },
    mediumcontainer:{
      flexDirection:'row',
      alignItems:'center',
      marginTop:33,
      paddingRight:10
    },
    topcontainer:{
      flexDirection:'row',
      marginTop:70,
      justifyContent:'space-between',
    },
})
export default Question;