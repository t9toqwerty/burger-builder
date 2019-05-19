import React, { Component } from "react";
import classes from "./BurgerIngrediants.module.css";
import PropTypes from "prop-types";

export default class BuegerIngrediants extends Component {
  render() {
    let ingrediants = null;
    switch (this.props.type) {
      case "bread-bottom":
        ingrediants = <div className={classes.BreadBottom} />;
        break;
      case "bread-top":
        ingrediants = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1} />
            <div className={classes.Seeds2} />
          </div>
        );
        break;
      case "meat":
        ingrediants = <div className={classes.Meat} />;
        break;
      case "cheese":
        ingrediants = <div className={classes.Cheese} />;
        break;
      case "salad":
        ingrediants = <div className={classes.Salad} />;
        break;
      case "bacon":
        ingrediants = <div className={classes.Bacon} />;
        break;
      default:
        ingrediants = null;
    }

    return ingrediants;
  }
}

BuegerIngrediants.propTypes = {
  type: PropTypes.string.isRequired
};
