import React, { Component } from 'react'
import { View } from 'react-native';
import { Header, List, ListItem } from 'react-native-elements'
import BestPriceCalculator from '../components/BestPriceCalculator'

class BestPrice extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <View>
        <Header
          centerComponent={{ text: 'Best Price Calculator', style: { color: '#fff' } }}
        />
        <BestPriceCalculator/>
      </View>
    );
  }    
}

export default BestPrice