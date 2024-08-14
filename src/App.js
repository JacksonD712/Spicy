import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Element } from "react-scroll";

import Nav from "./Components/Nav";
import "./App.css";
import Home from "./Sections/Home";
import Product from "./Sections/Product";
import Story from "./Sections/Story";
import Footer from "./Sections/Footer";
import Recepies from "./Screens/Recepies";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {/* Conditionally render Nav */}
      {location.pathname !== "/recepies" && <Nav />}
      
      {/* Main Sections that should always be visible on the root page */}
      {location.pathname === "/Spicy/" && (
        <>
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
        </>
      )}
      
      {/* Routes for other pages */}
      <Routes>
        <Route path="/recepies" element={<Recepies />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
