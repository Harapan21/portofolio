import React, { useEffect } from "react";
import ReactDOM from "react-dom";

// default style
import "../public/global.scss";

// component
import Logo from "./components/Logo";
import Aside from "./components/Aside";
import AsideNav from "./components/AsideNav";
import ScrollView from "./components/ScrollView";

function App() {
  return (
    <div className="fullwidth card">
      <Logo />
      <Aside />
      <AsideNav />
      <ScrollView />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("port"));
