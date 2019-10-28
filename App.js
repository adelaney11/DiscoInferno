import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import GameScreen from './src/screens/GameScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Game: {
    screen: GameScreen,
  },
  Help: {
    screen: HelpScreen,
  },
}, { 
  initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);