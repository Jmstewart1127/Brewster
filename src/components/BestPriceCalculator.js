import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, TextInput } from 'react-native'
import { Button, Card, Input, Text } from 'react-native-elements'

class BestPriceCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      price: '',
      pricePerUnit: '',
    }
  }

  _calculateBestPrice = () => {
    let price = this.state.price;
    let amount = this.state.amount;
    this.setState({ pricePerUnit: price / amount });
  }

  render() {
    return(
      <View>
        <Card>
          <Text>{this.state.pricePerUnit}</Text>
          <TextInput
            placeholder="Amount"
            onChangeText={(amount) => this.setState({amount})}
          />
          <TextInput
            placeholder="Price"
            onChangeText={(price) => this.setState({price})}
          />
          <Button
            text='CALCULATE'
            onPress={this._calculateBestPrice}
          />
        </Card>
      </View>
    );
  }    
}

export default BestPriceCalculator