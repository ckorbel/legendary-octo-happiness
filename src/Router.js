import React from "react";
import { Scene, Router } from "react-native-router-flux";
import LoginForm from "./Layout/Login/LoginForm";
import Library from "./Layout/Library/Library";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginForm} title="Please Register" />
        {/* <Scene /> */}
      </Scene>
    </Router>
  );
};

export default RouterComponent;
