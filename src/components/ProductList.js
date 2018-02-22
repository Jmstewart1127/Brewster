import React, { Component } from 'react'
import { View } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements'

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }
  render() {
    return(
      <View>
        <Card>
          <List>
            {this.state.products.map((product, i) => (
              <ListItem
                key={i}
                title={product.name}
                subtitle={product.averagePrice}
                avatar={{uri:product.avatar}}
              />
            ))}
          </List>
        </Card>
      </View>
    );
  }    
}

export default ProductList