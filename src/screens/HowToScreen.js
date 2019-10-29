import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const HowToScreen = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How To Play</Text>
      <Text style={styles.text}>
        <Text style={styles.capitalLetter}>A</Text>

        <Text>
          re you ready to dance? Disco Inferno is a game that increases in
          difficulty the farther you progress. Make sure you're ready, because
          we're gonna go fast!{'\n'}
          {'\n'}
          <Text style={styles.capitalLetter}>F</Text>ollow the commands the best
          you can. If you're slow we will let you know! Your score will decrease
          until it gets so low you lose!{'\n'}
          {'\n'}
          <Text style={styles.capitalLetter}>A</Text>s you kick butt and take
          names you will advance to new levels. But beware! Levels get
          progressively harder the further you progress! You got this!
        </Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#000000',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fcff5e',
    padding: 20,
    marginTop: 100,
  },
  title: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 33,
    color: '#ffffff',
    fontFamily: 'Chalkduster',
  },
  text: {
    color: '#41cdf4',
    marginTop: 200,
    fontSize: 20,
  },
  capitalLetter: {
    color: 'red',
    fontSize: 20,
  },
  wordBold: {
    fontWeight: 'bold',
    color: 'black'
  },
  italicText: {
    color: '#37859b',
    fontStyle: 'italic',
  },
  textShadow: {
    textShadowColor: 'red',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },
});

export default HowToScreen;
