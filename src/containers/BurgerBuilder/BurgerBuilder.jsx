import React, { Component } from "react";
import Aux from "./../../hoc/Aux";
import Burger from "./../../components/Burger/Burger";
import BurgerControls from "./../../components/Burger/BuildControls/BuildControls";

const INGREDIANTS_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

export default class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingrediants: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 4
    };
  }

  addIndrediantsHandler(type) {
    let updatedCount = this.state.ingrediants[type] + 1;
    let updatedIngrediants = { ...this.state.ingrediants };
    updatedIngrediants[type] = updatedCount;
    let newPrice = this.state.totalPrice + INGREDIANTS_PRICE[type];

    this.setState({
      totalPrice: newPrice,
      ingrediants: updatedIngrediants
    });
  }

  removeIndrediantsHandler(type) {}

  render() {
    return (
      <Aux>
        <Burger ingrediants={this.state.ingrediants} />
        <BurgerControls
          ingrediantsAdded={this.addIndrediantsHandler}
          ingrediantsRemoved={this.removeIndrediantsHandler}
        />
      </Aux>
    );
  }
}
