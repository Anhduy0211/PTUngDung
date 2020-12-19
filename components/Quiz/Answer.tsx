import React, { Fragment } from 'react';

import Button from './Button';
import {AnswerObject} from './QuestionClients'
import {StyleSheet,View,Text} from 'react-native';

interface AnswerProps{
  answers:string[];
  setAnswer:any;
  checkAnswer:()=>void;
  userAnswer:AnswerObject |undefined;
}

export default function Answer({answers,setAnswer,checkAnswer,userAnswer}:AnswerProps){
    return(
      
        <View style={styles.mediumcontentcontainer}>
    {
    answers.map((answer,key)=>(
      <Fragment key={answer}>
        <Button {...{key,answer}}

        correct={userAnswer?.correctAnswer===answer}
        disabled={userAnswer? true:false}
        onPress={()=>{
          setAnswer.current =answer;
          checkAnswer();
        }}/>
      </Fragment>
    ))
    }
    </View>
    )
}

const styles = StyleSheet.create({
    mediumcontentcontainer:{
      color:'black',
      flexDirection:'column',
      alignItems:'center',
      paddingTop:14,
      paddingHorizontal:24.5,
      marginTop:30
    }
  });