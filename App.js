/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';


type Props = {};
export default class App extends Component<Props> {

  state = {
      placeName: ""
  }

  placeNameChangeHandler = val => {
    this.setState({
      placeName : val
    });
  }

  render() {
    return (
      <View style={styles.container}>       
        <TextInput
          style={{width:300, borderColor: "black", borderWidth:1}}
          placeholder="Place name"
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
         />
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
  }  
});
