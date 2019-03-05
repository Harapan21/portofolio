import React, { Component } from "react";
import Home from "./view/Home";

export default class ScrollView extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <Home />
        </div>
        <div className="section" />
        <div className="section" />
        <div className="section" />
      </div>
    );
  }
}
