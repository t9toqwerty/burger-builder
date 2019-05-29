import React, { Component } from "react";
import Burger from "./../../components/Burger/Burger";
import BurgerControls from "./../../components/Burger/BuildControls/BuildControls";
import Modal from "./../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Aux from "../../hoc/Aux/Aux";
import axiosOrders from "./../../axios-orders";
import Spinner from "./../../components/UI/Spinner/Spinner";

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
      purchasable: false,
      purchasing: false,
      loading: false
    };

    this.addIndrediantsHandler = this.addIndrediantsHandler.bind(this);
    this.removeIndrediantsHandler = this.removeIndrediantsHandler.bind(this);
    this.updatePurchaseState = this.updatePurchaseState.bind(this);
    this.purchaseHandler = this.purchaseHandler.bind(this);
    this.purchaseCalcelHandler = this.purchaseCalcelHandler.bind(this);
    this.purchaseContinueHandler = this.purchaseContinueHandler.bind(this);
  }

  purchaseHandler() {
    this.setState({
      purchasing: true
    });
  }

  purchaseCalcelHandler() {
    this.setState({
      purchasing: false
    });
  }

  purchaseContinueHandler() {
    const order = {
      ingrediants: this.state.ingrediants,
      price: this.state.totalPrice,
      customer: {
        name: "Rahul K Jha",
        address: {
          street: "Test Street 1",
          zipCode: "123456",
          country: "Germany"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };
    axiosOrders
      .post("orders.json", order)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally({});
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

    let orderSummary = (
      <OrderSummary
        price={this.state.totalPrice}
        purchaseCancelled={this.purchaseCalcelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        ingrediants={this.state.ingrediants}
      />
    );

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCalcelHandler}
        />
        <Burger ingrediants={this.state.ingrediants} />
        <BurgerControls
          ordered={this.purchaseHandler}
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
