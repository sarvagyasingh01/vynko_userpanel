import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { useState,useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CartSidebar from "./components/shared/CartSidebar";
import LoginModal from "./components/shared/LoginModal";
import "./App.css"

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home'); // 'home', 'product/:id'
  const [currentProductId, setCurrentProductId] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Prevent body scroll when cart or modal is open
    if (isCartOpen || isLoginOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isCartOpen, isLoginOpen]);

  // Navigation functions
  const navigateToProduct = (productId) => {
    setCurrentProductId(productId);
    setCurrentRoute('product');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    setCurrentProductId(null);
    setCurrentRoute('home');
  };

  // Cart functions
  const handleAddToCart = (product, quantity, size) => {
    setCartItems(prevItems => {
      const newItem = { 
        ...product, 
        quantity, 
        size, 
        cartId: Date.now() // Unique ID for cart item
      };
      return [...prevItems, newItem];
    });
    setIsCartOpen(true); // Open cart after adding an item
  };

  const handleUpdateCartQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) {
      handleRemoveFromCart(cartId);
      return;
    }
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.cartId === cartId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveFromCart = (cartId) => {
    setCartItems(prevItems => prevItems.filter(item => item.cartId !== cartId));
  };

  // Route rendering
  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'product':
        return (
          <ProductPage 
            productId={currentProductId} 
            onAddToCart={handleAddToCart} 
            onBack={navigateToHome} 
          />
        );
      case 'home':
      default:
        return <HomePage onProductClick={navigateToProduct} />;
    }
  };

  return (
    <div className="font-sans bg-white">
      <Header onCartClick={() => setIsCartOpen(true)} onLoginClick={() => setIsLoginOpen(true)} />
      <main>
        {renderCurrentPage()}
      </main>
      <Footer />
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveFromCart}
      />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}