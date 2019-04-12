import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import BlueRed from './screens/BlueRedScreen'
import UserScreen from './screens/UserScreen'
import HomeScreen from './screens/HomeScreen'

const MainNavigator = createBottomTabNavigator({
  BlueRed: {screen: BlueRed},
  Home: {screen: HomeScreen},
  GetReuest: {screen: UserScreen},
});

const App = createAppContainer(MainNavigator);

export default App;