import { createStackNavigator } from 'react-navigation';
import MenuScreen from '../components/MenuScreen';

export default MainNavigator = createStackNavigator(
  {
    Menu: {
      screen: MenuScreen,
      navigationOptions: {header: null},
    },
  },
  {
    cardStyle: {shadowOpacity: 0}
  }
);
