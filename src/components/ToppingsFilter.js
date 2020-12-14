import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const ToppingsFilter = ({ activeTopping }) => {
  const { pizzas } = useStaticQuery(graphql`
    query {
      pizzas: allSanityPizza {
        nodes {
          toppings {
            name
            id
          }
        }
      }
    }
  `);

  const countPizzasInToppings = (pizzas) => {
    const counts = pizzas.nodes
      .map((pizza) => pizza.toppings)
      .flat()
      .reduce((acc, topping) => {
        const existingTopping = acc[topping.id];
        if (existingTopping) {
          existingTopping.count += 1;
        } else {
          acc[topping.id] = {
            id: topping.id,
            name: topping.name,
            count: 1,
          };
        }
        return acc;
      }, {});

    const sortedToppings = Object.values(counts).sort(
      (a, b) => b.count - a.count
    );

    return sortedToppings;
  };

  const toppingsWithCounts = countPizzasInToppings(pizzas);

  return (
    <ToppingStyles>
      <Link to="/pizzas">
        <span className="name">All</span>
        <span className="count">{pizzas.nodes.length}</span>
      </Link>
      {toppingsWithCounts.map((topping) => (
        <Link
          key={topping.id}
          to={`/topping/${topping.name}`}
          className={topping.name === activeTopping ? 'active' : ''}
        >
          <span className="name">{topping.name}</span>
          <span className="count">{topping.count}</span>
        </Link>
      ))}
    </ToppingStyles>
  );
};

const ToppingStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    align-items: center;
    padding: 5px;
    background: var(--grey);
    border-radius: 2px;
    .count {
      background: #fff;
      padding: 2px 5px;
    }
    &[aria-current='page'] {
      background: var(--yellow);
    }
  }
`;

export default ToppingsFilter;
