import ProductCard from "../product/ProductCard";
// import { products } from "../../data/products";
import { useEffect, useState } from "react";
import API from "../../util/API";

const ProductGrid = ({ onProductClick }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

   useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Cleanup the timeout when component unmounts
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const response = await API.get("/get-all-products");
        setProducts(response.data?.data?.docs);
        console.log("data", response.data?.data?.docs)
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

   const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

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

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.slice(0, visibleCount).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onProductClick={onProductClick}
            />
          ))}
        </div>
        {visibleCount < products.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleShowMore}
              className="bg-black text-white font-bold py-3 px-10 rounded-md hover:bg-gray-800 transition duration-300"
            >
              SHOW MORE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
