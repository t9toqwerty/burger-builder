import React, { Component } from "react";
import classes from "./DrawerToggle.module.css";

export default class DrawerToggle extends Component {
  render() {
    return (
      <div className={classes.DrawerToggle} onClick={this.props.clicked}>
        <div />
        <div />
        <div />
      </div>
    );
  }
}
