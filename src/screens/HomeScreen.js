import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const HomeScreen = props => {
  return (
    <ImageBackground
      source={require('/Users/joshua/DiscoInferno/assets/VenusPlant.jpg')}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Party Plant</Text>

        <TouchableOpacity
          //style={styles.play}
          onPress={() => props.navigation.navigate('Game')}>
          <Text style={styles.play}>Play</Text>
        </TouchableOpacity>

        <TouchableOpacity
          //style={styles.howToPlay}
          onPress={() => props.navigation.navigate('HowTo')}>
          <Text style={styles.howToPlay}>How To Play </Text>
        </TouchableOpacity>

        <TouchableOpacity
          //style={styles.options}
          onPress={() => props.navigation.navigate('PostOrView')}>
          <Text style={styles.howToPlay}>Leaderboards</Text>
        </TouchableOpacity>

        <TouchableOpacity
          //style={styles.options}
          onPress={() => props.navigation.navigate('Options')}>
          <Text style={styles.options}>Options</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  play: {
    backgroundColor: 'white',
    color: 'black',
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
    backgroundColor: 'green',
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
    color: 'black',
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
    color: 'orange',
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

export default HomeScreen;
