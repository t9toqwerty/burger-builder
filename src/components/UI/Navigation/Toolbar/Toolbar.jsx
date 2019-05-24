import React, { Component } from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../../Logo/Logo";
import NavigationItems from "./../NavigationItems/NavigationItems";

export default class Toolbar extends Component {
  render() {
    return (
      <header className={classes.Toolbar}>
        <dir>Menu</dir>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </header>
    );
  }
}
