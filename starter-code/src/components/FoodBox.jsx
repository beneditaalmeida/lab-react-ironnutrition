import React, { Component } from "react";

import FoodItem from "./FoodItem";

export default class FoodBox extends Component {
  render() {
    const foods = this.props.foods;
    return (
      <div>
        {foods.map(food => (
          <FoodItem food={food} />
        ))}
      </div>
    );
  }
}
