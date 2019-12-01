import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class PostOrView extends Component {
  render() {
    return (
      <ImageBackground
        source={require('/Users/joshua/DiscoInferno/assets/coolFire.jpg')}
        style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.title}>Leaderboards</Text>

          <TouchableOpacity
            //style={styles.play}
            onPress={() => this.props.navigation.navigate('Highscores')}>
            <Text style={styles.play}>Add to Leaderboards</Text>
          </TouchableOpacity>

          <TouchableOpacity
            //style={styles.howToPlay}
            onPress={() => this.props.navigation.navigate('ListScreen')}>
            <Text style={styles.howToPlay}>View Leaderboards</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  play: {
    backgroundColor: 'white',
    color: '#c73932',
    width: '75%',
    borderRadius: 27,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '11%',
    padding: '2%',
    fontSize: 27,
    marginTop: '40%',
    //borderWidth: 1,
  },
  howToPlay: {
    backgroundColor: '#c73932',
    color: 'white',
    width: '75%',
    borderRadius: 27,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '11%',
    padding: '2%',
    fontSize: 27,
    marginTop: '10%',
    //borderWidth: 1,
  },
  options: {
    backgroundColor: 'white',
    color: '#3A59FF',
    width: '75%',
    borderRadius: 27,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '11%',
    padding: '2%',
    fontSize: 27,
    marginTop: '10%',
    //borderWidth: 1,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 50,
    color: '#ffffff',
    fontFamily: 'Copperplate-bold',
  },
  background: {
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 280,
    height: 280,
    marginLeft: '15%',
    marginTop: '10%',
  },
});
