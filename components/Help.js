import React,{ Component} from 'react';
import {View,Text,ScrollView} from 'react-native'
import CarouselComponent from './Carousel'

class HelpUser extends Component {
  render() {
    return (
      <ScrollView>
        <CarouselComponent/>
      </ScrollView>
    )
  }
}

export default HelpUser;