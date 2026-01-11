const CartSidebar = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`fixed top-0 right-0 h-full w-full md:w-96 bg-black text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-xl font-semibold underline">Shopping Cart</h2>
          <button onClick={onClose} className="text-2xl">&times;</button>
        </div>
        
        <div className="flex-grow p-4 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-gray-400">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.cartId} className="flex items-center space-x-4 p-2 border border-gray-700 rounded-lg">
                  <img src={item.imageUrl} alt={item.name} className="w-20 h-24 object-cover rounded"/>
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-400">Size: {item.size}</p>
                    <p className="font-bold">₹{item.price}</p>
                    <div className="flex items-center mt-2 border border-gray-600 rounded w-24">
                       <button onClick={() => onUpdateQuantity(item.cartId, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center text-lg hover:bg-gray-800">-</button>
                       <span className="flex-1 text-center text-sm">{item.quantity}</span>
                       <button onClick={() => onUpdateQuantity(item.cartId, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center text-lg hover:bg-gray-800">+</button>
                    </div>
                  </div>
                  <button onClick={() => onRemoveItem(item.cartId)} className="text-red-500 hover:text-red-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-700">
            <div className="flex justify-between items-center mb-4">
                <span className="text-lg">Cart Subtotal</span>
                <span className="text-xl font-bold">₹{subtotal}</span>
            </div>
            <button className="w-full bg-white text-black font-bold py-3 rounded-md hover:bg-gray-300 transition-colors">
                CHECKOUT
            </button>
        </div>
      </div>
    </div>
  );
};
export default CartSidebar;