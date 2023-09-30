import React from "react";
import Body from "./components/Main/Body";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
