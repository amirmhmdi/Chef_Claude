export default function IngredientsList({ ingredients, getRecipeFromAI }) {
  const listItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    <section>
      <h2>Ingredients on Hand:</h2>
      <ul className="ingredient-list">{listItems}</ul>
      {ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for recipe?</h3>
            <p>Generate a recipe from your ingredients</p>
          </div>
          <button onClick={getRecipeFromAI}>Generate Recipe</button>
        </div>
      )}
    </section>
  );
}
