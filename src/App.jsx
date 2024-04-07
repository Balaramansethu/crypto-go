import React, { useEffect, useState } from "react";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import NavigationComponent from "./components/routes/NavigationComponent/NavigationComponent";

const App = (props) => {


  return (
    <React.Fragment>
      <NavBarComponent/>
      <NavigationComponent/>
    </React.Fragment>
  );
};

export default App;
