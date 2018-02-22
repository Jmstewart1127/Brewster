import React, { Component } from 'react'
import { View } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements'

class BeerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    }
  }
  render() {
    return(
      <View>
        <Card>
          <List>
            {this.state.beers.map((beer, i) => (
              <ListItem
                key={i}
                title={beer.name}
                subtitle={beer.averagePrice}
                avatar={{uri:beer.avatar}}
              />
            ))}
          </List>
        </Card>
      </View>
    );
  }    
}

export default BeerList