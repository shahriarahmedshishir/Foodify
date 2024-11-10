import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Herotwo from "./Components/Herotwo/Herotwo";
import Items from "./Components/Items/Items";

function App() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Items></Items>
      <Herotwo></Herotwo>
      <About></About>
      <Contact></Contact>
    </div>
  );
}

export default App;
