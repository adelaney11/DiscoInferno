import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ImageBackground,
  PanResponder,
  Animated,
} from 'react-native';
import Draggable from 'react-native-draggable';

const GameScreen = props => {
  return (
    <View style={{backgroundColor: 'blue', flex: 1}}>
      <Draggable
        imageSource={require('/Users/joshua/DiscoInferno/assets/jumping-plant.gif')}
        renderSize={80}
        x={200}
        y={300}
        onDragRelease={this._changeFace}
        onLongPress={() => console.log('long press')}
        onShortPressRelease={() => console.log('press drag')}
        onPressIn={() => console.log('in press')}
        onPressOut={() => console.log('out press')}
      />
    </View>
  );
};

const Screen = props => {
  return (
    <ImageBackground
      source={require('/Users/joshua/DiscoInferno/assets/brownPlantBackground.jpeg')}
      style={styles.background}>
      <View style={styles.mainContainer}>
        <View style={styles.dropZone}>
          <Text style={styles.text}>Drop them here!</Text>
        </View>
        <View style={styles.ballContainer} />
        <View style={styles.row}>
          <Draggable
            imageSource={require('/Users/joshua/DiscoInferno/assets/jumping-plant.gif')}
            renderSize={100}
            x={200}
            y={0}
            onDragRelease={this._changeFace}
            onLongPress={() => console.log('long press')}
            onShortPressRelease={() => console.log('press drag')}
            onPressIn={() => console.log('in press')}
            onPressOut={() => console.log('out press')}
          />
          <Draggable
            imageSource={require('/Users/joshua/DiscoInferno/assets/jumping-plant.gif')}
            renderSize={100}
            x={200}
            y={0}
            onDragRelease={this._changeFace}
            onLongPress={() => console.log('long press')}
            onShortPressRelease={() => console.log('press drag')}
            onPressIn={() => console.log('in press')}
            onPressOut={() => console.log('out press')}
          />
          <Draggable
            imageSource={require('/Users/joshua/DiscoInferno/assets/jumping-plant.gif')}
            renderSize={100}
            x={200}
            y={0}
            onDragRelease={this._changeFace}
            onLongPress={() => console.log('long press')}
            onShortPressRelease={() => console.log('press drag')}
            onPressIn={() => console.log('in press')}
            onPressOut={() => console.log('out press')}
          />
          <Draggable
            imageSource={require('/Users/joshua/DiscoInferno/assets/hula-ing-plant.gif')}
            renderSize={100}
            x={200}
            y={0}
            onDragRelease={this._changeFace}
            onLongPress={() => console.log('long press')}
            onShortPressRelease={() => console.log('press drag')}
            onPressIn={() => console.log('in press')}
            onPressOut={() => console.log('out press')}
          />
          <Draggable
            imageSource={require('/Users/joshua/DiscoInferno/assets/discoing-plant-.gif')}
            renderSize={100}
            x={200}
            y={0}
            onDragRelease={this._changeFace}
            onLongPress={() => console.log('long press')}
            onShortPressRelease={() => console.log('press drag')}
            onPressIn={() => console.log('in press')}
            onPressOut={() => console.log('out press')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  ballContainer: {
    height: 200,
  },
  row: {
    flexDirection: 'row',
  },
  dropZone: {
    height: 200,
    backgroundColor: '#00334d',
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: 'center',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  background: {
    width: '100%',
    height: '100%',
  },
});

export default Screen;
