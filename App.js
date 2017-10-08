
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {HomeScreen} from "./src/screens/HomeScreen"

export default class circle_app extends Component {
  render() {
    return (

      <HomeScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});

AppRegistry.registerComponent('circle_app', () => circle_app);
