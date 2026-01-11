import { useEffect, useState } from "react";
import { products } from "../data/products";
import { CartIcon } from "../components/icons";
import API from "../util/API";
const ProductPage = ({ productId, onAddToCart, onBack }) => {
  const [product , setProduct] = useState(null)
  const [loading , setLoading] = useState(null)
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  
  // const product = products.find(p => p.id === parseInt(productId));

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await API.get("/get-one-product", {
          params: { productId }
        });
        console.log("Response",response?.data);
        setProduct(response?.data)
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };


    fetchProduct();
  }, []);

  if (loading) {
  return (
    <div className="flex justify-center items-center py-16 space-x-1">
      {["V", "Y", "N", "K", "O"].map((letter, i) => (
        <span
          key={i}
          className={`text-2xl font-bold text-gray-700 animate-pulse`}
          style={{ animationDelay: `${i * 0.1}s`, animationDuration: "0.75s" }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}

  if (!product) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <button onClick={onBack} className="bg-white text-black font-bold py-3 px-8 rounded-md hover:bg-gray-300">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const discount = product?.price !== product?.discountPrice

  return (
    <div className="bg-black text-white min-h-screen">
       <button onClick={onBack} className="absolute top-24 left-4 sm:left-8 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center">
             <img src={product?.images[0]?.url} alt={product.name} className="rounded-lg max-w-md w-full" />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl mb-6">
             {!discount && <span className="font-bold">₹{product.price}</span>}
             {discount && <span className="font-bold">₹{product.discountPrice}</span>}
              {discount && <span className="line-through text-gray-500 ml-4">₹{product.price}</span>}
             {discount && <span className="text-green-500 font-semibold ml-4">
                {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
              </span>}
            </p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Options</h3>
              <div className="flex space-x-2">
                {sizes.map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-md font-bold transition-colors ${selectedSize === size ? 'bg-white text-black' : 'bg-gray-800 hover:bg-gray-700'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <a href="#" className="text-sm text-gray-400 mt-2 inline-block hover:underline">✓ Sizing guide</a>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Quantity</h3>
              <div className="flex items-center border border-gray-700 rounded-md w-32">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-10 h-10 flex items-center justify-center text-xl hover:bg-gray-800">-</button>
                <span className="flex-1 text-center">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="w-10 h-10 flex items-center justify-center text-xl hover:bg-gray-800">+</button>
              </div>
            </div>

            <div className="space-y-4">
              <button onClick={() => onAddToCart(product, quantity, selectedSize)} className="w-full bg-white text-black font-bold py-4 rounded-md hover:bg-gray-300 transition-colors flex items-center justify-center space-x-2">
                <CartIcon />
                <span>ADD TO CART</span>
              </button>
              <button className="w-full bg-gray-800 text-white font-bold py-4 rounded-md hover:bg-gray-700 transition-colors">
                BUY NOW
              </button>
            </div>
            
            <p className="mt-8 text-gray-400">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;