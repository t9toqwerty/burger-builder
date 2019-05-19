import React, { Component } from "react";
import Aux from "./../../hoc/Aux";
import Burger from "./../../components/Burger/Burger";

export default class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingrediants: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      }
    };
  }

  render() {
    return (
      <Aux>
        <Burger ingrediants={this.state.ingrediants} />
        <div>Builder Controls</div>
      </Aux>
    );
  }
}
