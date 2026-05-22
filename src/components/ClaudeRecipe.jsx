import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe({ recipeText }) {
  return (
    <section>
      <h2>Chef Claude Recommends:</h2>
      <ReactMarkdown>{recipeText}</ReactMarkdown>
    </section>
  );
}
