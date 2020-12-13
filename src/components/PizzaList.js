import React, { Fragment } from 'react';
import SinglePizza from './SinglePizza';

const PizzaList = ({ pizzas }) => {
  console.log(pizzas);

  return (
    <>
      {pizzas.map((pizza) => (
        <SinglePizza key={pizza.id} pizza={pizza} />
      ))}
    </>
  );
};

export default PizzaList;
