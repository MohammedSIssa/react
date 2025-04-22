import { createContext, useContext, useState } from "react";

const ShopContext = createContext(null)

export default function ShopSite() {
  const products = [
    { id: 1, title: "Product A" },
    { id: 2, title: "Product B" }
  ];
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  return (
    <ShopContext.Provider value={{ products, cartItems, addToCart }}>
      <Home />    
    </ShopContext.Provider>
  )
}

function Home() {
  return (
    <>
      <ShopPage />
      <CartPage />
    </>
  )
}

function ShopPage() {
  const { products } = useContext(ShopContext)
  return (
    <>
      {products.map((product) => <div className="product">{product.title}</div>)}
    </>
  )
}

function CartPage() {
  const { cartItems } = useContext(ShopContext)
  return (
    <>
      {cartItems.map((cartItem) => <div className="cart-item">{cartItem.title}</div>)}
    </>
  )

}