export default function Main() {
  return (
    <main>
      <form className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="add ingredient"
        />
        <button type="submit">Add Ingredient</button>
      </form>
    </main>
  );
}
