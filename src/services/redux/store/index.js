import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import reducers from "../reducers";

const nextRootReducer = require("../reducers/index");

const config = {
  key: "root",
  storage: AsyncStorage,
  blacklist: []
};

const reducer = persistCombineReducers(config, reducers);

function configureStore(initialState = {}) {
  const store = createStore(reducer, initialState, applyMiddleware(thunk));

  // Fix the hot reload option
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      store.replaceReducer(nextRootReducer);
    });
  }
  const persistor = persistStore(store);
  return { persistor, store };
}

export default configureStore();
