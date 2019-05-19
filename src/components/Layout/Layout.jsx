import React, { Component } from "react";
import Aux from "./../../hoc/Aux";
import classes from "./Layout.module.css";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <div>Toolbar,SideDrawer,Backdrop</div>
        <main className={classes.content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
