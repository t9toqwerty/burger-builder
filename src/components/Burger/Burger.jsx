import React, { Component } from "react";
import classes from "./Burger.module.css";
import BurgerIngrediants from "./BurgerIngrediants/BuegerIngrediants";

export default class Burger extends Component {
  render() {
    return (
      <div className={classes.Burger}>
        <BurgerIngrediants type="bread-top" />
        <BurgerIngrediants type="cheese" />
        <BurgerIngrediants type="meat" />
        <BurgerIngrediants type="bread-bottom" />
      </div>
    );
  }
}
