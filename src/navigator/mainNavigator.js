import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile201711Navigator from '../features/UserProfile201711/navigator';
import UserProfile201680Navigator from '../features/UserProfile201680/navigator';
import Tutorial201679Navigator from '../features/Tutorial201679/navigator';
import NotificationList201651Navigator from '../features/NotificationList201651/navigator';
import Settings201650Navigator from '../features/Settings201650/navigator';
import Settings201642Navigator from '../features/Settings201642/navigator';
import UserProfile201640Navigator from '../features/UserProfile201640/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile201711: { screen: UserProfile201711Navigator },
UserProfile201680: { screen: UserProfile201680Navigator },
Tutorial201679: { screen: Tutorial201679Navigator },
NotificationList201651: { screen: NotificationList201651Navigator },
Settings201650: { screen: Settings201650Navigator },
Settings201642: { screen: Settings201642Navigator },
UserProfile201640: { screen: UserProfile201640Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
