import React, { Component } from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

export default class BuildControls extends Component {
  constructor() {
    super();
    this.controls = [
      {
        label: "Salad",
        type: "salad"
      },
      {
        label: "Bacon",
        type: "bacon"
      },
      {
        label: "Meat",
        type: "meat"
      },
      {
        label: "Cheese",
        type: "cheese"
      }
    ];
  }
  render() {
    return (
      <div className={classes.BuildControls}>
        <p>
          Current Price: <strong>{this.props.currentPrice.toFixed(2)}</strong>
        </p>
        {this.controls.map(control => (
          <BuildControl
            type={control.type}
            key={control.label}
            label={control.label}
            added={() => this.props.ingrediantsAdded(control.type)}
            removed={() => this.props.ingrediantsRemoved(control.type)}
            disabled={this.props.disabledInfo[control.type]}
          />
        ))}
        <button
          disabled={!this.props.purchasable}
          className={classes.OrderButton}
          onClick={this.props.ordered}
        >
          ORDER NOW
        </button>
      </div>
    );
  }
}
