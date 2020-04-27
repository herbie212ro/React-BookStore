import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/App.css";
import "./CSS/App.scss";
//import { Container, Row } from "react-bootstrap";
import { AuthenticationProvider } from "./Context/Authentication/Authentication";
import Search from "./Components/Search/Search";
import ProductDetailsPages from "./Components/ProductPages/ProductDetailsPages";
import HomePage from "../src/Components/homepage/HomePage";
import Products from "./Components/ProductPages/Products";
import Header from "./Components/Navigation/Header";
import ProductListPages from "./Components/ProductPages/ProductListPages";

function App() {
  return (
    <div className="App">
      <AuthenticationProvider>
        <Header />
        <HomePage />
        <Search />
        <Products />
        <ProductListPages />
        <ProductDetailsPages />
      </AuthenticationProvider>
    </div>
  );
}

export default App;
