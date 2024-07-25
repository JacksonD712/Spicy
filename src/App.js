import React from "react";
import {Element} from "react-scroll";

import Nav from "./Components/Nav";
import "./App.css";
import Home from "./Sections/Home";
import Product from "./Sections/Product";
import Story from "./Sections/Story";
import Footer from "./Sections/Footer";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Element name="home">
        <Home />
      </Element>
      <Element name="story">
        <Story />
      </Element>
      <Element name="product">
        <Product />
      </Element>
      <Element name="footer">
        <Footer />
      </Element>
    </div>
  );
};

export default App;
