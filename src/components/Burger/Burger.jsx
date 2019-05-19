import React, { Component } from "react";
import classes from "./Burger.module.css";
import BurgerIngrediants from "./BurgerIngrediants/BuegerIngrediants";

export default class Burger extends Component {
  render() {
    //TODO Analyse this part of code - 8 to 14
    let transformedIngrediants = Object.keys(this.props.ingrediants)
      .map(igKey => {
        return [...Array(this.props.ingrediants[igKey])].map((_, i) => {
          return <BurgerIngrediants type={igKey} key={igKey + i} />;
        });
      })
      .reduce((acc, curr) => {
        return acc.concat(curr);
      }, []);

    if (transformedIngrediants.length === 0) {
      transformedIngrediants = <p>Please start adding ingrediants</p>;
    }

    return (
      <div className={classes.Burger}>
        <BurgerIngrediants type="bread-top" />
        {transformedIngrediants}
        <BurgerIngrediants type="bread-bottom" />
      </div>
    );
  }
}
