import "./App.css";
import {
  Navbar,
  Hero,
  About,
  Why,
  Portfolio,
  Testimonials,
} from "./Components/index.js";

function App() {
  return (
    <div className="App overflow-hidden box-border">
      <Navbar />
      <Hero />
      <About />
      <Why />
      <Portfolio />
      <Testimonials />
    </div>
  );
}

export default App;
