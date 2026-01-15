import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CartSidebar from "./components/shared/CartSidebar";
import LoginModal from "./components/shared/LoginModal";
import "./App.css";
import ContactsPage from "./pages/ContactsPage";
import PrivacyPolicy from "./pages/PrivacyPolicyPage";
import ReturnsAndExchangePolicy from "./pages/ReturnsAndExchangePolicy";

function AppContent() {
  const navigate = useNavigate();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    document.body.style.overflow =
      isCartOpen || isLoginOpen ? "hidden" : "auto";
  }, [isCartOpen, isLoginOpen]);

  // Navigation
  const navigateToProduct = (productId) => {
    navigate(`/product/${productId}`);
    window.scrollTo(0, 0);
  };

  // Cart functions
  const handleAddToCart = (product, quantity, size) => {
    setCartItems((prev) => [
      ...prev,
      {
        ...product,
        quantity,
        size,
        cartId: Date.now(),
      },
    ]);
    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (cartId, quantity) => {
    if (quantity < 1) {
      setCartItems((prev) => prev.filter((i) => i.cartId !== cartId));
      return;
    }
    setCartItems((prev) =>
      prev.map((i) =>
        i.cartId === cartId ? { ...i, quantity } : i
      )
    );
  };

  const handleRemoveFromCart = (cartId) => {
    setCartItems((prev) => prev.filter((i) => i.cartId !== cartId));
  };

  return (
    <div className="font-sans bg-white">
      <Header
        onCartClick={() => setIsCartOpen(true)}
        onLoginClick={() => setIsLoginOpen(true)}
      />

      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage onProductClick={navigateToProduct} />}
          />
          <Route
            path="/product/:id"
            element={<ProductPage onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/contact-us"
            element={<ContactsPage />}
          />
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />
          <Route
            path="/returns-and-exchange-policy"
            element={<ReturnsAndExchangePolicy />}
          />
        </Routes>
      </main>

      <Footer />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
