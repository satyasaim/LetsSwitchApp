import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imglogo}>
          <Image source={require('../images/1x/logo.png')} />
        </View>
      </View>
    );
  }
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 15,
  },
  imglogo:{
      alignSelf:'center',
  },
});
