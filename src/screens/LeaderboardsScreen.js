import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import * as firebase from 'firebase';

//import {firebaseDb} from './List';
const firebaseConfig = {
  apiKey: 'AIzaSyBpSTRmdzTeV-uTAAFi1EvOsXxlvdx4d9I',
  authDomain: 'discoinferno.firebaseapp.com',
  databaseURL: 'https://discoinferno.firebaseio.com',
  projectId: 'discoinferno',
  storageBucket: 'discoinferno.appspot.com',
  messagingSenderId: '927505155361',
  appId: '1:927505155361:web:aceaa93df502e98174ea60',
  measurementId: 'G-NSWZGSG7E6',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const firebaseDb = firebase.database();

let addItem = item => {
  firebaseDb.ref('/items').push({
    name: item,
  });
};

export default class LeaderboardsScreen extends Component {
  state = {
    name: '',
  };
  handleChange = e => {
    this.setState({
      name: e.nativeEvent.text,
    });
  };
  handleSubmit = () => {
    addItem(this.state.name);
    Alert.alert('Highscore saved successfully');
  };
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Enter Username</Text>
        <TextInput style={styles.itemInput} onChange={this.handleChange} />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#6565fc',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center',
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
