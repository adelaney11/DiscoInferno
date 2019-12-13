import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const HowToScreen = props => {
  return (
    <ImageBackground
      source={require('/Users/joshua/DiscoInferno/assets/plantBackground.jpeg')}
      style={styles.background}>
      <View>
        <Text style={styles.title}>How To Play Screen</Text>
        <Text style={styles.text}>
          Do the commands on the screen as fast as you can
        </Text>
        <Text style={styles.text}>
          Do not let the tempo of the music distract you!
        </Text>
        <Text style={styles.text}>
          Be more alert as the frequency of the commands get faster each level
        </Text>
        <Text style={styles.text}>
          Keep your eyes on the scoreboard and be aware of the lowest score to
          loose.
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginVertical: 8,
    marginTop: 100,
    fontSize: 50,
    color: 'green',
    fontFamily: 'Copperplate-bold',
  },
  background: {
    width: '100%',
    height: '100%',
  },
  text: {
    marginTop: 50,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HowToScreen;
