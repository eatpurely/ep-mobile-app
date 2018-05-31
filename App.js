import React, { Component } from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import NavigatorService from './navigators/helper';
import MainNavigator from './navigators/MainNavigator';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MainNavigator ref={_nav => NavigatorService.setContainer(_nav)}/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
