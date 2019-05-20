import React, { Component } from "react";
import classes from "./BuildControl.module.css";

export default class BuildControl extends Component {
  render() {
    return (
      <div className={classes.BuildControl}>
        <div className={classes.Label}>{this.props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
      </div>
    );
  }
}
