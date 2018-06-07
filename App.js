import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, YellowBox} from 'react-native';
import NavigatorService from './navigators/helper';
import MainNavigator from './navigators/MainNavigator';


export default class App extends Component {
  render() {
    YellowBox.ignoreWarnings([
      'Remote debugger is in a background tab which may cause apps to perform slowly',
      'Warning: isMounted(...) is deprecated',
      'Module RCTImageLoader'
    ])
    
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
