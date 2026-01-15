import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartIcon } from "../components/icons";
import API from "../util/API";

const ProductPage = ({ onAddToCart }) => {
  const { id } = useParams(); // 👈 productId from URL
  const navigate = useNavigate(); // 👈 browser navigation

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  const sizes = ["S", "M", "L", "XL", "XXL"];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await API.get("/get-one-product", {
          params: { productId: id },
        });
        setProduct(response?.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]); // 👈 important dependency

  /* ---------------- LOADING ---------------- */
  if (loading) {
    return (
      <div className="flex justify-center items-center py-16 space-x-1">
        {["V", "Y", "N", "K", "O"].map((letter, i) => (
          <span
            key={i}
            className="text-2xl font-bold text-gray-700 animate-pulse"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    );
  }

  /* ---------------- NOT FOUND ---------------- */
  if (!product) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-white text-black font-bold py-3 px-8 rounded-md hover:bg-gray-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const discount = product.price !== product.discountPrice;

  return (
    <div className="bg-black text-white min-h-screen">    
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center">
            <img
              src={product?.images?.[0]?.url}
              alt={product.name}
              className="rounded-lg max-w-md w-full"
            />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

            <p className="text-3xl mb-6">
              {!discount && <span className="font-bold">₹{product.price}</span>}
              {discount && (
                <>
                  <span className="font-bold">₹{product.discountPrice}</span>
                  <span className="line-through text-gray-500 ml-4">
                    ₹{product.price}
                  </span>
                  <span className="text-green-500 font-semibold ml-4">
                    {Math.round(
                      ((product.price - product.discountPrice) / product.price) * 100
                    )}
                    % OFF
                  </span>
                </>
              )}
            </p>

            {/* SIZE */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Options</h3>
              <div className="flex space-x-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-md font-bold ${
                      selectedSize === size
                        ? "bg-white text-black"
                        : "bg-gray-800 hover:bg-gray-700"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* QUANTITY */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Quantity</h3>
              <div className="flex items-center border border-gray-700 rounded-md w-32">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 text-xl hover:bg-gray-800"
                >
                  -
                </button>
                <span className="flex-1 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-10 h-10 text-xl hover:bg-gray-800"
                >
                  +
                </button>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="space-y-4">
              <button
                onClick={() =>
                  onAddToCart(product, quantity, selectedSize)
                }
                className="w-full bg-white text-black font-bold py-4 rounded-md hover:bg-gray-300 flex items-center justify-center space-x-2"
              >
                <CartIcon />
                <span>ADD TO CART</span>
              </button>

              <button className="w-full bg-gray-800 py-4 rounded-md hover:bg-gray-700">
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
