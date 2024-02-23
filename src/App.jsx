import "./App.css";

import { Route, Routes } from "react-router-dom";

import Header from "./Header/Header";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import AddToCart from "./Pages/AddToCart";

import AllProducts from "./Pages/Categories/AllProducts";
import Backpack from "./Pages/Categories/Backpack";
import Electronics from "./Pages/Categories/Electronics";
import Jewelry from "./Pages/Categories/Jewelry";
import MensClothing from "./Pages/Categories/MensClothing";
import ProductPage from "./Pages/ProductPage";
import Footer from "./components/Footer";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route path="AllProducts" element={<AllProducts />} />
          <Route path="Backpacks" element={<Backpack />} />
          <Route path="Electronics" element={<Electronics />} />
          <Route path="Jewelries" element={<Jewelry />} />
          <Route path="MensClothing" element={<MensClothing />} />
        </Route>
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Toaster />
      <Footer />
    </>
  );
}

export default App;

