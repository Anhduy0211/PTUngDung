
import React,{useState,useEffect,Fragment,useRef, useCallback} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Alert} from 'react-native';

import {Difficluty,Kind, getQuizQuestions,QuestionState,unicodeToChar} from './Util';

import Button from './Button'
import Question from './Question'
import Answer from './Answer'
import Next from '../Icons/Next'
import Play from '../Icons/Play'
export type AnswerObject={
  question:string,
  answer:string,
  correct:boolean,
  correctAnswer:string,

}
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
/* Icon */
export default function QuestionDetail() {
  const[loading,setLoading]=useState(false);
  const[questions,setQuestion]=useState<QuestionState[]>([]);
  const[userAnswers,setUserAnswers]= useState<AnswerObject[]>([]);
  const[score,setScore]=useState(0);
  const[gameOver,setGameOver]=useState(true);
  const[TOTAL_QUESTION]=useState(10);
  const[number,setNumber]=useState(0)
  const setAnswer= useRef(null);

  const startQuiz= async () =>{
    setLoading(true);
    setGameOver(false);
   
    const newQuestion= await getQuizQuestions(TOTAL_QUESTION,Difficluty.EASY,Kind.Animal);
    console.log(newQuestion);
  
    setQuestion(newQuestion);

    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }
  const checkAnswer =()=>{
   if(!gameOver){
     //Answer of user
     const answer = setAnswer.current;
      // Check if user answer is correct
     const correct = questions[number].correct_answer === answer;
     //ipdate the score
     if(correct){
       setScore((prev)=>prev+1)
     }
     //save answer in the array of answers
     const answerObject={
       question:questions[number].question,
       answer,
       correct,
       correctAnswer:questions[number].correct_answer
     };
     setUserAnswers((prev)=>[...prev, answerObject]);
     setTimeout(()=>{
       nextQuestion();
     },1000)
   }                                   
  }

  const nextQuestion=()=>{
    const nextQ= number+1;
    if(nextQ ===TOTAL_QUESTION){
      setGameOver(true);
      Alert.alert('Congratulation!!!', 'You finished your test',
      [{
        text:'Score',
        onPress:()=>{Alert.alert('Score','Score of test:'+score)}
      },
      {
        text:'Exit',
        onPress:()=>{startQuiz()}
      }],{cancelable:false}
      )
    }else{
      setNumber(nextQ)
    }
  }
  useEffect(()=>{
    
    startQuiz();
  },[])
  return (
    <View style={styles.container}>
      
      <View style={styles.topcontainer}>
    <Text style={{fontSize:16,color:"black"}}>
      Questions
    </Text>

    <Text style={{fontSize:16,color:"orange"}}>
      {number+1}/{questions.length}
    </Text>
    </View>
   
    <View>
      <Text>{'Score: '+score}</Text>
    </View>

    {questions.length>0 ?(
        <>
      <Question questionNR={number+1} 
      question={questions[number].question}/>

  <Answer answers={questions[number].answers} {...{setAnswer,checkAnswer}}
    userAnswer={userAnswers?userAnswers[number]:undefined}
    />

        </>
    ):null}


  
      <View style={styles.bottomcontainer}>
        <TouchableWithoutFeedback>
        {!gameOver && !loading && number !=TOTAL_QUESTION-1?(
          <Next active={true} onPress={nextQuestion}/>
        ):<Play active={true} onPress={startQuiz}/>}
        </TouchableWithoutFeedback>
   

      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position:'relative',
    padding:20,
    fontFamily:'Times',
  },
  bottomcontainer:{
    padding:20,
    backgroundColor:'#006996',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:300,
    width:60,
    height:60,
    position:'absolute',
    bottom:20,
    right:20
  },
  topcontainer:{
    flexDirection:'row',
    marginTop:70,
    justifyContent:'space-between',
  },
  mediumcontainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:33,
    paddingRight:10
  },
  mediumcontentcontainer:{
    flexDirection:'column',
    alignItems:'center',
    paddingTop:14,
    paddingHorizontal:24.5,
    marginTop:30
  }
});
