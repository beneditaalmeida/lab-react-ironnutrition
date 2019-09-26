import React from "react";

import { Table } from "react-bootstrap";

const FoodItem = ({ food }) => {
  return (
    <Table>
      <tbody>
        <tr>
          <td>
            <img width={80} src={food.image} alt={food.name} />
          </td>
          <td>
            <p>{food.name}</p>
          </td>
          <td>
            <p>{food.calories}</p>
          </td>
          <td>
            <p>{food.quantity}</p>
          </td>
          <td>Table cell</td>
          <td>
            {" "}
            <button className="button is-info">+</button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default FoodItem;
