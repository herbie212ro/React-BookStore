import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/App.css";
import "./CSS/App.scss";
//import { Container, Row } from "react-bootstrap";
import { AuthenticationProvider } from "./Context/Authentication/Authentication";
import Search from "./Components/Views/Search";
import ProductDetailsPages from "./Components/Views/ProductDetailsPages";
import HomePage from "./Components/Views/HomePage";
import Products from "./Components/Views/Products";
import Header from "./Components/Utilities/Header";
import ProductListPages from "./Components/Views/ProductListPages";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <switch>
        <AuthenticationProvider>
          <Header />
          <HomePage />

          <Search />
          <Products />
          <ProductListPages />
          <ProductDetailsPages />
        </AuthenticationProvider>
      </switch>
    </div>
  );
}

export default App;
