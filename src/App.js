import { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Products from "./pages/Products";
import Confirmation from "./Components/Confirmation";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import About from "./pages/About";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    // Getting data using the commerce instance
    const { data } = await commerce.products.list();
    // using the setProduct function to add the commerce data to products array
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productID, quantity) => {
    const item = await commerce.cart.add(productID, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const item = await commerce.cart.update(lineItemId, { quantity });
    // console.log(item.cart);
    setCart(item.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const item = await commerce.cart.remove(lineItemId);

    setCart(item.cart);
  };

  const handleEmptyCart = async () => {
    const item = await commerce.cart.empty();

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  // console.log(cart);

  return (
    <Router>
      <div className="App">
        <>
          <Navbar totalItems={cart.total_items} />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/products"
              element={
                <Products products={products} onAddToCart={handleAddToCart} />
              }
            />
            {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  onUpdateCartQty={handleUpdateCartQty}
                  onRemoveFromCart={handleRemoveFromCart}
                  onEmptyCart={handleEmptyCart}
                />
              }
            />
            <Route path="/checkout" element={<Checkout cart={cart} />} />
            <Route path="/confirm" element={<Confirmation />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </>
      </div>
    </Router>
  );
}

export default App;
