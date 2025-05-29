// src/components/BurgerStack/BurgerStack.jsx

import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = ({ stack, onRemove }) => {
  return (
    <ul>
      {stack.length === 0 ? (
        <p>No Ingredients</p>
      ) : (
        stack.map((ingredient, index) => (
          <Ingredient key={index} ingredient={ingredient} onClick={() => onRemove(index)} isStacked={true} />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
  