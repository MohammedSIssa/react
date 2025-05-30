import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { Store } from 'lucide-react'

import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import ErrorPage from "./Pages/ErrorPage";
import ShoppingCartPage from "./Pages/ShoppingCart";

import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);
  const [activeLink, setActiveLink] = useState("home");
  const [data, setData] = useState(null)

  function handleCart(item) {
    setCart((prev) => [...prev, item]);
  }
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <Store size={30} color="#e3e3e3"/>
        </div>
        <ul>
          <li className={activeLink === "home" ? "active" : ""}>
            <NavLink to="/" onClick={() => setActiveLink("home")}>
              Home
            </NavLink>
          </li>
          <li className={activeLink === "shop" ? "active" : ""}>
            <NavLink to="/shop" onClick={() => setActiveLink("shop")}>
              Shop
            </NavLink>
          </li>
          <li className={activeLink === "cart" ? "active" : ""}>
            <NavLink to="/cart" onClick={() => setActiveLink("cart")}>
              <ShoppingCart /> ({cart.length})
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop onAddToCart={handleCart} data={data} setData={setData} cart={cart} />} />
        <Route
          path="/cart"
          element={<ShoppingCartPage items={cart} setCart={setCart} />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
