import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const OptionsScreen = props => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Options</Text>
      <TouchableOpacity style={styles.button} onPress={() => this}>
        <Text> Mute </Text>
      </TouchableOpacity>
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
    marginTop: -702,
    fontSize: 33,
    color: '#ffffff',
    fontFamily: 'Chalkduster',
  },
});

export default OptionsScreen;
