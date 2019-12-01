import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import GameScreen from './src/screens/GameScreen';
import HowToScreen from './src/screens/HowToScreen';
import OptionsScreen from './src/screens/OptionsScreen';
import LeaderboardsScreen from './src/screens/LeaderboardsScreen';
import PostOrView from './src/screens/PostOrView';
import List from './src/screens/List';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Game: GameScreen,
    HowTo: HowToScreen,
    Options: OptionsScreen,
    Highscores: LeaderboardsScreen,
    ListScreen: List,
    PostOrView: PostOrView,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(navigator);
