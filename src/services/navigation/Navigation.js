import { createBottomTabNavigator } from "react-navigation-tabs";
// Screens
import HomeScreen from "screens/home/HomeScreen";
import TestScreen from "screens/test/TestScreen";

const defaultNavigationOptions = {
  tabBarVisible: false,
  header: null
};

export const Navigator = createBottomTabNavigator(
  {
    home: HomeScreen,
    test: TestScreen
  },
  {
    defaultNavigationOptions
  }
);
