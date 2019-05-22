import React, { Component } from "react";
import Aux from "./../../hoc/Aux";
import Burger from "./../../components/Burger/Burger";
import BurgerControls from "./../../components/Burger/BuildControls/BuildControls";
import Modal from "./../../components/UI/Modal/Modal";

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
      totalPrice: 4,
      purchasable: false
    };

    this.addIndrediantsHandler = this.addIndrediantsHandler.bind(this);
    this.removeIndrediantsHandler = this.removeIndrediantsHandler.bind(this);
  }
  updatePurchaseState(ingrediants) {
    let allIngrediantCount = Object.keys(ingrediants)
      .map(ingrediant => ingrediants[ingrediant])
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({
      purchasable: allIngrediantCount !== 0
    });
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
    this.updatePurchaseState(updatedIngrediants);
  }

  removeIndrediantsHandler(type) {
    let updatedCount = this.state.ingrediants[type] - 1;
    if (updatedCount < 0) {
      return;
    }
    let updatedIngrediants = { ...this.state.ingrediants };
    updatedIngrediants[type] = updatedCount;
    let newPrice = this.state.totalPrice - INGREDIANTS_PRICE[type];

    this.setState({
      totalPrice: newPrice,
      ingrediants: updatedIngrediants
    });
    this.updatePurchaseState(updatedIngrediants);
  }

  render() {
    let disabledInfo = { ...this.state.ingrediants };

    for (const item in disabledInfo) {
      if (disabledInfo.hasOwnProperty(item)) {
        disabledInfo[item] = disabledInfo[item] === 0;
      }
    }

    return (
      <Aux>
        <Modal />
        <Burger ingrediants={this.state.ingrediants} />
        <BurgerControls
          disabledInfo={disabledInfo}
          currentPrice={this.state.totalPrice}
          ingrediantsAdded={this.addIndrediantsHandler}
          ingrediantsRemoved={this.removeIndrediantsHandler}
          purchasable={this.state.purchasable}
        />
      </Aux>
    );
  }
}
