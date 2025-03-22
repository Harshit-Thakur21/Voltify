import React from 'react';
import { useNavigate } from 'react-router-dom';


import { BsFillLaptopFill } from "react-icons/bs";
import { FaMobile } from "react-icons/fa";
import { IoTv } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa";

function Categories() {
  const navigate = useNavigate();

  const categories = [
    { icon: BsFillLaptopFill, title: 'Laptops', key: 'laptops' },
    { icon: FaMobile, title: 'Mobile & Phones', key: 'phones' },
    { icon: IoTv, title: 'TV', key: 'tv' },
    { icon: FaHeadphones, title: 'Accessories', key: 'accessories' },
  ];

  const handleCategoryClick = (categoryKey) => {
    navigate(`/category/${categoryKey}`);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center mb-16">
        <span className="text-5xl md:text-5 font-extrabold">What </span>
        <span className="text-5xl md:text-5xl font-extrabold text-customPurple">we </span>
        <span className="text-5xl md:text-5xl font-extrabold">provide?</span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {categories.map((category) => (
          <div
            key={category.key}
            className="flex flex-col items-center gap-4 cursor-pointer"
            onClick={() => handleCategoryClick(category.key)} // Use the key for navigation
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-purple-200 flex items-center justify-center hover:bg-gray-200 transition-colors duration-300">
              <category.icon className="w-12 h-12 md:w-16 md:h-16 text-black" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-center">{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
