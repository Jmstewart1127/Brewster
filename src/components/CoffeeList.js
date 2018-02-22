import React, { Component } from 'react'
import { View } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements'

class CoffeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coffees: [],
    }
  }
  render() {
    return(
      <View>
        <Card>
          <List>
            {this.state.coffees.map((coffee, i) => (
              <ListItem
                key={i}
                title={coffee.name}
                subtitle={coffee.strength}
                avatar={{uri:coffee.avatar}}
              />
            ))}
          </List>
        </Card>
      </View>
    );
  }    
}

export default CoffeeList