import React from "react";
import HomePage from "./pages/HomePage";
import ProductShowcasePage from "./pages/ProductShowcase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router basename="/markburghard-react-site">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-showcase" element={<ProductShowcasePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
