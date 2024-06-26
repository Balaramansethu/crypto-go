import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import HomeComponent from "../../HomeComponent/HomeComponent";
import ConverterComponent from "../../ConverterComponent/ConverterComponent";
import ContactUsComponent from "../../ContactUsComponent/ContactUsComponent";
import AboutComponent from "../../AboutComponent/AboutComponent";
// import '../NavigationComponent/NavigationComponent.css'
const NavigationComponent = () => {
  return (
    <Router>
      <div className="heading">
        <Link to="/">
          <p className="pages">Home</p>
        </Link>
        <Link to="/ConvertCurrency">
          <p className="pages">Convert Currrency</p>
        </Link>
        <Link to="/About">
          <p className="pages">About</p>
        </Link>
        <Link to="/contact">
          <p className="pages">Contact us</p>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/ConvertCurrency" element={<ConverterComponent />} />
        <Route path="About" element={<AboutComponent />} />
        <Route path="contact" element={<ContactUsComponent />} />
      </Routes>
    </Router>
  );
};

export default NavigationComponent;
