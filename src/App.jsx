import "./App.css";
import Header from "./Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import AddToCart from "./Pages/AddToCart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<AddToCart />} />
      </Routes>
     
    </>
  );
}

export default App;
