import React, { Component } from "react";
import Aux from "../../../../hoc/Aux/Aux";
import Logo from "../../../Logo/Logo";
import Backdrop from "../../Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";

export default class SideDrawer extends Component {
  render() {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (this.props.open) {
      attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
      <Aux>
        <Backdrop show={this.props.open} clicked={this.props.closed} />
        <div className={attachedClasses.join(" ")}>
          <div className={classes.Logo}>
            <Logo />
          </div>
          <nav>
            <NavigationItems />
          </nav>
        </div>
      </Aux>
    );
  }
}
