const Ingredient = ({ ingredient, onClick, isStacked }) => {
    return (
      <li style={{ backgroundColor: ingredient.color, padding: "5px", margin: "5px" }}>
        {ingredient.name}
        <button onClick={onClick}>{isStacked ? "X" : "+"}</button>
      </li>
    );
  };
  
  export default Ingredient;