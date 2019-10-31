import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const HomeScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Disco Inferno</Text>
        
        <TouchableOpacity 
        style={styles.button}
        onPress = {() => props.navigation.navigate('Game')}>
            <Text>Play</Text>
        </TouchableOpacity> 

        <TouchableOpacity 
        style={styles.button}
        onPress = {() => props.navigation.navigate('HowTo')}>
          <Text> How To Play </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.button}
        onPress = {() => props.navigation.navigate('Options')}>
          <Text> Options </Text>
        </TouchableOpacity>
      </View>
    )
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
      marginVertical: 8,
      fontSize: 33,
      color: '#ffffff',
      fontFamily: 'Futura',
    },
  });

export default HomeScreen;