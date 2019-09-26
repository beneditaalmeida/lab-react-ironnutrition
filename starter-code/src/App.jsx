import React, { Component } from "react";

import "./App.css";

import foods from "./foods";
import FoodBox from "./components/FoodBox";

import { Container } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foodBox: foods
    };
    this.moreFood = this.moreFood.bind(this);
  }
  moreFood() {
    this.setState({
      food: {
        ...this.state.food,
        food: this.state.food + 1
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Container>
          <FoodBox foods={this.state.foodBox} />
        </Container>
      </div>
    );
  }
}

export default App;
