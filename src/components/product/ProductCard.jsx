const ProductCard = ({ product, onProductClick }) => {

  const discount = product?.price !== product?.discountPrice

  return (

    <div className="text-center cursor-pointer group px-2 md:p-0 lg:p-0 " onClick={() => {onProductClick(product.productId)}}>
      <div className="bg-gray-100 rounded-lg overflow-hidden ">
        {/* <img src={product?.imageUrl} alt={product.name} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" /> */}
        <img src={product?.images[0]?.url} alt={product?.name} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"/>
      </div>
      <h3 className="mt-4 text-lg font-semibold">{product?.name}</h3>
      <p className="mt-1">
        {!discount && <span className="font-bold">₹{product?.price}</span>}
        {discount && <span className="font-bold">₹{product?.discountPrice}</span>}
        {discount && <span className="line-through text-gray-500 ml-2">₹{product?.price}</span>}
        {discount && <span className="text-green-600 font-semibold ml-2">
          {Math.round(((product?.price - product?.discountPrice) / product?.price) * 100)}% OFF
        </span>}
      </p>
    </div>
  )
};
export default ProductCard;