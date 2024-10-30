import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";

const App = () => (
  <Provider store={store}>
    <Screen1 />
    <Screen2 />
  </Provider>
);

export default App;
