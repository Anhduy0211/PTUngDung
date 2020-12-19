import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';

import firebase from 'firebase'


export default class LoadingScreen extends Component {

    componentDidMount(){
        this.chechifLoggedIn();
    }
    chechifLoggedIn=()=>{
        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                this.props.navigation.navigate('MainComponent');
            }
            else{
                this.props.navigation.navigate('LoginScreen');
            }
        }.bind(this)
        );
    }

 render() {
    return (
        <View style={styles.container}>
        </View>
      );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});