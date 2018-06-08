import { createStackNavigator } from 'react-navigation';
import MenuScreen from '../components/MenuScreen';
import MenuItemScreen from '../components/MenuItemScreen';
import {
  Colors,
} from '@eatpurely/mobile-ui-kit';

export default MainNavigator = createStackNavigator(
  {
    menu: {
      screen: MenuScreen,
      navigationOptions: {header: null},
    },
    menuItem: {
      screen: MenuItemScreen,
      navigationOptions: {header: null}
    }
  },
  {
    cardStyle: {shadowOpacity: 0, backgroundColor: Colors.statics.white }
  }
);
