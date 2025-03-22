import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


import Header from '../components/Header';
import Footer from '../components/Footer';


import { useCart } from '../../context/CartContext';
import { BsCartFill } from "react-icons/bs";

function ProductList() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/products/category/${category}`);
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) {
    return (
      <div>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-customPurple"></div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 capitalize">{category}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
            >
              <div onClick={() => navigate(`/product/${product.id}`)}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-2">{product.brand}</p>
                  <span className="text-xl font-bold text-customPurple">
                  ₹{product.price}
                  </span>
                </div>
              </div>
              <div className="p-4 pt-0">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                    alert(`${product.name} added to cart`);
                  }}
                  className="w-full bg-white font-semibold text-customPurple border-2 border-customPurple px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
                >
                  <div className="flex items-center justify-center gap-2">
                    <BsCartFill className="text-lg" />
                    <span>Add to Cart</span>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductList;