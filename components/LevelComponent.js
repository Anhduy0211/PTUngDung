import React, { Component} from 'react';
import { View, Text, ScrollView,TouchableHighlight,StyleSheet } from 'react-native';
import {Card,Image,Button} from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import QuestionDetail from './Quiz/QuestionClients'

const Quiz= createStackNavigator();
function QuizNavigatorScreen() {
  return(
    <Quiz.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#64b5f6' },
      headerTintColor: '#fff',
      headerTitleStyle: { color: '#fff' }
    }}>
      <Quiz.Screen name="Question" component={LevelQuizz} ></Quiz.Screen>
        <Quiz.Screen name="Quiz Details" component={QuestionDetail} options={{title:'Test Quiz'}}></Quiz.Screen>
    </Quiz.Navigator>
  )
}
function LevelQuizz({navigation}){
    return(
        <View style={{flex: 1,textAlign:'center',alignItems:'center'}}>
        <TouchableHighlight 
        
          style ={styles.button}>
          <Button  title="Easy" onPress={() => navigation.navigate('Quiz Details')}/>
        </TouchableHighlight>

        <TouchableHighlight 
          style ={styles.button}>
          <Button  title="Normal" onPress={() => navigation.navigate('Quiz Details')}/>
   
        </TouchableHighlight>
    
        <TouchableHighlight 
          style ={styles.button}>
          <Button  title="Hard" onPress={() => navigation.navigate('Quiz Details')}/>
   
        </TouchableHighlight>
        </View>

    )
}
class LevelClient extends Component{
    render() {
        return (
            <QuizNavigatorScreen/>
        )
    }
}

const styles = StyleSheet.create({
    button:{  textAlign: 'center',
    justifyContent: 'center',
      height: 40,
      width:220,
      borderRadius:10,
      marginLeft :50,
      marginRight:50,
      marginTop :20},
  
  }
  )
export default LevelClient;