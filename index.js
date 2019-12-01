/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import * as firebase from 'firebase';

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

AppRegistry.registerComponent(appName, () => App);
