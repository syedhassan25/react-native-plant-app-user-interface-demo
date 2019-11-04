

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


import Navigation from './src/navigation';
import { Block } from './src/components';

// import all used images
const images = [
  require('./src/assets/icons/back.png'),
  require('./src/assets/icons/plants.png'),
  require('./src/assets/icons/seeds.png'),
  require('./src/assets/icons/flowers.png'),
  require('./src/assets/icons/sprayers.png'),
  require('./src/assets/icons/pots.png'),
  require('./src/assets/icons/fertilizers.png'),
  require('./src/assets/images/plants_1.png'),
  require('./src/assets/images/plants_2.png'),
  require('./src/assets/images/plants_3.png'),
  require('./src/assets/images/explore_1.png'),
  require('./src/assets/images/explore_2.png'),
  require('./src/assets/images/explore_3.png'),
  require('./src/assets/images/explore_4.png'),
  require('./src/assets/images/explore_5.png'),
  require('./src/assets/images/explore_6.png'),
  require('./src/assets/images/illustration_1.png'),
  require('./src/assets/images/illustration_2.png'),
  require('./src/assets/images/illustration_3.png'),
  require('./src/assets/images/avatar.png'),
];


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
