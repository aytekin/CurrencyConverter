
import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Button, Alert, Text } from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import Home from "./components/home";
import Header from "./components/header";
import Currency from "./components/currency";
import Main from './components/main';

export default class App extends Component {

  currentScreen = 1;
  showCurrency = "Kurlar";
  showConverter = "Dönüştür";

  handleClick() {
    if (this.currentScreen == 0) {
      this.currentScreen = 1;
    } else this.currentScreen = 0;
    Alert.alert(this.currentScreen);
  }

  render() {
    return (
      <>

        <StatusBar barStyle="light-content" backgroundColor="#2f3640" />
        <View style={styles.container}>
          <Header />

        </View>
        <Main/>
      </>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: '#2f3640',
    height: 100
  },
  viewPager: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#2f3640'
  }
});
