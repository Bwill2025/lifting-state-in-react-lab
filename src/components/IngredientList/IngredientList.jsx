// src/components/IngredientList/IngredientList.jsx

import Ingredient from "../Ingredient/Ingredient";

const IngredientList = ({ ingredients, onAdd }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <Ingredient key={index} ingredient={ingredient} onClick={() => onAdd(ingredient)} isStacked={false} />
      ))}
    </ul>
  );
};

export default IngredientList;

  