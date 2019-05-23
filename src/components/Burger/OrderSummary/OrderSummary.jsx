import React, { Component } from "react";
import Button from "./../../UI/Button/Button";

export default class OrderSummary extends Component {
  render() {
    const ingrediantSummary = Object.keys(this.props.ingrediants).map(igkey => {
      return (
        <li key={igkey}>
          <span style={{ textTransform: "capitalize" }}>{igkey}</span>:
          {this.props.ingrediants[igkey]}
        </li>
      );
    });

    return (
      <div>
        <p>A delicious Burger with following ingrediants:</p>
        <ul>{ingrediantSummary} </ul>
        <p>
          <strong>Total Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType={"Danger"} clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType={"Success"} clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </div>
    );
  }
}
