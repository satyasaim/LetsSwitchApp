/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator,} from 'react-navigation-stack';

//Screens import
import SplashScreen from './screens/SplashScreen';


// const AppSwitchNavigator = createStackNavigator({
//   Splashscreen = {screen: SplashScreen}
  
// });

// const AppContainer = createAppContainer(AppSwitchNavigator);
export default class App extends React.Component {
  render() {
   
    return (
      <SplashScreen/>
    );
  }
}
