import React, { Component } from "react";
import Aux from "./../../hoc/Aux";
import Burger from "./../../components/Burger/Burger";

export default class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingrediants: {
        salad: 1,
        bacon: 1,
        cheese: 2,
        meat: 2
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
