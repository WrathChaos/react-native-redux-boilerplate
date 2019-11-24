import React from "react";
import { View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { createAppContainer } from "react-navigation";
import { Navigator } from "services/navigation/Navigation";
import configureStore from "services/redux/store";
import NavigationService from "react-navigation-helpers";
import { PersistGate } from "redux-persist/es/integration/react";

console.disableYellowBox = true;
// Persistor & Store
const { persistor, store } = configureStore;

const App = () => {
  const MainNavigator = createAppContainer(Navigator);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="dark-content" />
          <MainNavigator
            ref={navigatorRef =>
              NavigationService.setGlobalLevelNavigator(navigatorRef)
            }
          />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
