import React from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import FeaturedBeer from '../screens/FeaturedBeer'
import FeaturedCoffee from '../screens/FeaturedCoffee'
import BestPrice from '../screens/BestPrice'


export const FeedStack = StackNavigator({
  Beer: {
    screen: FeaturedBeer,
    navigationOptions: {
      title: 'Status',
    },
  },
  Coffee: {
    screen: FeaturedCoffee,
    navigationOptions: {
      title: 'Jobs',
    }
  },
  BestPrice: {
    screen: BestPrice,
    navigationOptions: {
      title: 'My ID#',
    }
  },
});

export const Tabs = TabNavigator({
  FeaturedBeer: {
    screen: FeaturedBeer,
    navigationOptions: {
      tabBarLabel: 'Beer',
    },
  },
  FeaturedCoffee: {
    screen: FeaturedCoffee,
    navigationOptions: {
      tabBarLabel: 'Coffee',
    }
  },
  BestPrice: {
    screen: BestPrice,
    navigationOptions: {
      tabBarLabel: 'Best Price'
    },
  },
});