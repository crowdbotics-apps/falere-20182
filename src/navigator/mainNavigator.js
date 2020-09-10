import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial100141Navigator from '../features/Tutorial100141/navigator';
import NotificationList100113Navigator from '../features/NotificationList100113/navigator';
import Settings100112Navigator from '../features/Settings100112/navigator';
import Settings100104Navigator from '../features/Settings100104/navigator';
import UserProfile100102Navigator from '../features/UserProfile100102/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial100141: { screen: Tutorial100141Navigator },
NotificationList100113: { screen: NotificationList100113Navigator },
Settings100112: { screen: Settings100112Navigator },
Settings100104: { screen: Settings100104Navigator },
UserProfile100102: { screen: UserProfile100102Navigator },

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
