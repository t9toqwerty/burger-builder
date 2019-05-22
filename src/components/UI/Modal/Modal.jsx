import React, { Component } from "react";
import classes from "./Modal.module.css";

export default class Modal extends Component {
  render() {
    return <div className={classes.Modal}>{this.props.children}</div>;
  }
}
