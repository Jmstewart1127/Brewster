import React, { Component } from 'react'
import { View } from 'react-native';
import { Header, List, ListItem } from 'react-native-elements'
import CoffeeList from '../components/CoffeeList'

class FeaturedCoffee extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <View>
        <Header
          centerComponent={{ text: 'Featured Coffee', style: { color: '#fff' } }}
        />
        <CoffeeList/>
      </View>
    );
  }    
}

export default FeaturedCoffee