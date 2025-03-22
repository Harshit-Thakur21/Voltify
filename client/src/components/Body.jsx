import React from 'react';

import { BsCartFill } from "react-icons/bs";
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

// import image from '../../public/products'

function Body() {
  const navigate = useNavigate();

  const {addToCart} = useCart();

  const products = [
    {
      id: "iphone-14-pro",
      name: "Apple iPhone 14 Pro Max",
      price: "69900",
      image: "../../public/products/iphone14.webp",
    },
    {
      id: "samsung-s23-ultra",
      name: "Samsung Galaxy S23 Ultra",
      price: "74999",
      image: "../../public/products/s23.jpg",
    },
    {
      id: "macbook-pro-16",
      name: "MacBook Pro 16",
      price: "179990",
      image: "../../public/products/macbook16.webp",
    },
    {
      id: "samsung-neo-qled",
      name: "Samsung Neo QLED 4K",
      price: 84990,
      description: "65-inch Neo QLED 4K, Quantum HDR, Smart TV",
      image: "https://images.samsung.com/is/image/samsung/p6pim/in/qa98qn90aakxxl/gallery/in-neo-qled-qn90a-384003-qa98qn90aakxxl-530329395?$650_519_PNG$",
    }
  ];

  return (
      <div>
          <div className="container mx-auto px-4">
              <h1 className="text-start mb-16">
                  <span className="text-4xl md:text-5xl font-extrabold">Best </span>
                  <span className="text-4xl md:text-5xl font-extrabold text-customPurple">Flash </span>
                  <span className="text-4xl md:text-5xl font-extrabold">Sales</span>
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {products.map((product) => (
                      <div
                          onClick={() => navigate(`/product/${product.id}`)}
                          key={product.id}
                          className="bg-white rounded-xl shadow-lg overflow-hidden hover:cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                      >
                          <div className="aspect-square relative">
                              <img
                                  src={product.image}
                                  alt={product.name}
                                  className="w-full h-full object-cover"
                              />
                          </div>
                          <div className="p-4">
                              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                  {product.name}
                              </h3>
                              <div className="flex justify-between items-center">
                                  <span className="text-xl font-bold text-customPurple">
                                    ₹{product.price}
                                  </span>
                                  <button onClick={(e) => {
                                    e.stopPropagation();
                                    addToCart(product);
                                      alert(`${product.name} added to cart`);
                                  }} className="bg-white font-semibold text-customPurple border-2 border-customPurple px-4 py-2 rounded-3xl hover:bg-opacity-90 transition-colors duration-300">
                                    <div className='flex items-center gap-2'>
                                      <BsCartFill/>
                                      Add to Cart
                                    </div>
                                  </button>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
}

export default Body