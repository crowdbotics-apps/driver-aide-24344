import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile201822Navigator from '../features/UserProfile201822/navigator';
import Tutorial201821Navigator from '../features/Tutorial201821/navigator';
import NotificationList201793Navigator from '../features/NotificationList201793/navigator';
import Settings201792Navigator from '../features/Settings201792/navigator';
import Settings201784Navigator from '../features/Settings201784/navigator';
import UserProfile201782Navigator from '../features/UserProfile201782/navigator';
import UserProfile201751Navigator from '../features/UserProfile201751/navigator';
import Tutorial201750Navigator from '../features/Tutorial201750/navigator';
import NotificationList201722Navigator from '../features/NotificationList201722/navigator';
import Settings201721Navigator from '../features/Settings201721/navigator';
import Settings201713Navigator from '../features/Settings201713/navigator';
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
UserProfile201822: { screen: UserProfile201822Navigator },
Tutorial201821: { screen: Tutorial201821Navigator },
NotificationList201793: { screen: NotificationList201793Navigator },
Settings201792: { screen: Settings201792Navigator },
Settings201784: { screen: Settings201784Navigator },
UserProfile201782: { screen: UserProfile201782Navigator },
UserProfile201751: { screen: UserProfile201751Navigator },
Tutorial201750: { screen: Tutorial201750Navigator },
NotificationList201722: { screen: NotificationList201722Navigator },
Settings201721: { screen: Settings201721Navigator },
Settings201713: { screen: Settings201713Navigator },
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
