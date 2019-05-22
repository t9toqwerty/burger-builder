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
        {this.controls.map(control => (
          <BuildControl
            type={control.type}
            key={control.label}
            label={control.label}
            added={() => this.props.ingrediantsAdded()}
            removed={() => this.props.ingrediantsRemoved()}
          />
        ))}
      </div>
    );
  }
}
