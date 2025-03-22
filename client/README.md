# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


import React from 'react'

{/*icons */}
import { BsFillLaptopFill } from "react-icons/bs";
import { FaMobile } from "react-icons/fa";
import { IoTv } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa";


function Categories() {
  return (
    <>
    <div>

        <h1 
        className='text-6xl font-extrabold'
        >What <span 
        className='text-customPurple font-extrabold '>
        we</span> provide?</h1>

        <div>
          <div>
            <BsFillLaptopFill/>
          </div>
          <div>
            <FaMobile/>
          </div>
          <div>
            <IoTv/>
          </div>
          <div>
            <FaHeadphones/>
          </div>
        </div>
    </div>
    </>
  )
}

export default Categories








import React, { useState } from 'react';
import VoltifyLogo from '../assets/VoltifyLogo.png';
import { IoMenuOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { HiUser } from "react-icons/hi2";
import { BsCartFill } from "react-icons/bs";
import { ChevronDown } from 'lucide-react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const categories = [
        "Mobile & Phones",
        "Home Appliances",
        "Laptops",
        "Accessories"
    ];

    return (
        <div className="relative">
            <nav className='flex items-center justify-between px-4 py-2 bg-white text-black border-b'>
                {/* left section Logo and Menu*/}
                <div className='flex items-center space-x-4 w-full'>
                    {/*logo part*/}
                    <div className='pl-28 pt-1.5 pb-2'> 
                        <img 
                            src={VoltifyLogo} 
                            alt="Voltify Logo"
                            className='h-12 w-auto' 
                        />
                    </div>
                    {/*menu button*/}
                    <div className='pl-6 relative'>
                        <button 
                            className='flex items-center gap-1 hover:bg-gray-100 px-3 py-2 rounded-md transition-colors'
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <IoMenuOutline className='text-2xl text-black h-6 w-auto'/>
                            <span className='text-sm'>Menu</span>
                            <ChevronDown className={`h-4 w-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Menu */}
                        {isMenuOpen && (
                            <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                {/* Shop by Categories Section */}
                                <div className="px-4 py-2">
                                    <h3 className="font-semibold text-gray-900 mb-2">Shop by Categories</h3>
                                    <div className="space-y-1">
                                        {categories.map((category) => (
                                            <button
                                                key={category}
                                                className="block w-full text-left px-2 py-1.5 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                                            >
                                                {category}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gray-200 my-2"></div>

                                {/* Sales Button */}
                                <div className="px-4 py-2">
                                    <button className="w-full text-left px-2 py-1.5 text-red-600 font-semibold hover:bg-red-50 rounded-md transition-colors">
                                        Sales
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Search Bar */}
                    <div className="relative flex w-1/2 ml-24">
                        <input 
                            type="text" 
                            placeholder="What are you looking for?" 
                            className="w-full px-4 py-2 rounded-md text-gray-500 focus:outline-none border-2 border-slate-300 bg-slate-100" 
                        />
                        <FiSearch className="absolute right-2 top-2.5 h-6 w-auto text-gray-500" />
                    </div>

                    {/* Middle Section: User and Cart */}
                    <div className="flex items-center gap-14">
                        {/* User Button */}
                        <div className='flex ml-6'>
                            <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
                                <HiUser className="h-6 w-auto" />
                            </button>
                        </div>
                        {/* Cart Button */}
                        <div className="relative flex">
                            <button className="hover:bg-gray-100 p-2 rounded-full transition-colors">
                                <BsCartFill className="h-5 w-auto" />
                                <span className="absolute -top-1 -right-1 text-xs text-white rounded-full px-1.5 py-0.5 bg-customPurple">
                                    0
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Overlay when menu is open */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-20 z-40"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}
        </div>
    );
}

export default Header;



import React from 'react'

import VoltifyLogo from '../assets/VoltifyLogo.png'

{/*Icons*/}
import { IoMenuOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { HiUser } from "react-icons/hi2";
import { BsCartFill } from "react-icons/bs";

function header() {
    return (
      <nav className='flex items-center justify-between px-4 py-2 bg-white text-black border-2'>
        {/* left section Logo and Menu*/}
        <div className='flex items-center space-x-4 w-full'>
          {/*logo part*/}
          <div className='pl-28 pt-1.5 pb-2'> 
            <img 
            src={VoltifyLogo} 
            alt="Voltify Logo"
            className='h-12 w-auto' 
            />
          </div>
          {/*menu button*/}
          <div className='pl-6'>
            <button className='flex items-center'>
            <IoMenuOutline className='text-2xl text-black hover:text-gray-900 h-8 w-auto'/>
            <span className='text-sm pl-0.5 pt-1'>Menu</span>
            </button>
          </div>
          {/* Search Bar */}
          <div className="relative flex w-1/2 ml-24">
            <input 
              type="text" 
              placeholder="What are you looking for?" 
              className="w-full px-4 py-2 rounded-md text-gray-500 focus:outline-none border-2 border-slate-300 bg-slate-100" 
            />
            <FiSearch className="absolute right-2 top-2.5 h-6 w-auto" />
          </div>

          {/* Middle Section: User and Cart */}

          <div className="flex items-center gap-14">
            {/* User Button */}
            <div className='flex ml-6'>
              <button>
                <HiUser className="h-7 w-auto" />
              </button>
            </div>
            {/* Cart Button */}
            <div className="relative flex">
              <button>
                <BsCartFill className="h-6 w-auto" />
                <span className="absolute -top-2 -right-2 text-xs text-white rounded-full px-1 bg-customPurple">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
  
        
      </nav>
  )
}

export default header