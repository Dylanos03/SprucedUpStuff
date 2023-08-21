import "./App.css";
import { Navbar, Hero, About, Why } from "./Components/index.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Why />
    </div>
  );
}

export default App;
