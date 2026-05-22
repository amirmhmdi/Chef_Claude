import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  // console.log(import.meta.env.VITE_ANTHROPIC_API_KEY);
  // console.log(import.meta.env.VITE_HF_ACCESS_TOKEN);
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
