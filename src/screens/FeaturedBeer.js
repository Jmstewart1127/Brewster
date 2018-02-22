import React, { Component } from 'react'
import { View } from 'react-native';
import { Header, List, ListItem } from 'react-native-elements'
import BeerList from '../components/BeerList'

class FeaturedBeer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <View>
        <Header
          centerComponent={{ text: 'Featured Beers', style: { color: '#fff' } }}
        />
        <BeerList/>
      </View>
    );
  }    
}

export default FeaturedBeer