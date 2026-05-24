import { useState, useRef, useEffect } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromChefClaude, getRecipeFromMistral } from "../ai";

export default function Main() {
  const [ingredients, setIngredients] = useState([
    "tomato",
    "onion",
    "garlic",
    "oregano",
    "chicken",
  ]);
  const [recipe, setRecipe] = useState("");
  const recipeSection = useRef(null);

  useEffect(() => {
    if (recipeSection.current !== null && recipe !== "") {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
    const formData = new FormData(event.currentTarget);
    const ingredient = formData.get("ingredient");
    console.log("Ingredient:", ingredient);
    setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
    event.currentTarget.reset();
  }
  async function getRecipeFromAI() {
    const recipeResponse = await getRecipeFromMistral(ingredients);
    setRecipe(recipeResponse);
  }
  return (
    <main>
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="add ingredient"
          name="ingredient"
        />
        <button type="submit">Add Ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          getRecipeFromAI={getRecipeFromAI}
          refRecipeSection={recipeSection}
        />
      )}

      {recipe && <ClaudeRecipe recipeText={recipe} />}
    </main>
  );
}
