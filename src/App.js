import "./App.css";
import { Navbar, Hero, About, Why, Portfolio } from "./Components/index.js";

function App() {
  return (
    <div className="App overflow-hidden box-border">
      <Navbar />
      <Hero />
      <About />
      <Why />
      <Portfolio />
    </div>
  );
}

export default App;
