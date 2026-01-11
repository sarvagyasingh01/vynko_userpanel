import Hero from "../components/home/Hero";
import ProductGrid from "../components/product/ProductGrid";
const HomePage = ({ onProductClick }) => (
  <>
    <Hero />
    <ProductGrid onProductClick={onProductClick} />
  </>
);

export default HomePage;
