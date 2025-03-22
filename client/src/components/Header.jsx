import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import VoltifyLogo from '../assets/VoltifyLogo.png'
import { useCart } from '../../context/CartContext.jsx';

{/*Icons*/}
import { IoMenuOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { HiUser } from "react-icons/hi2";
import { BsCartFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const { getCartCount } = useCart();

    return (
      <nav className='relative flex items-center justify-between px-4 py-2 bg-white text-black border-2'>
        {/* left section Logo and Menu*/}
        <div className='flex items-center space-x-4 w-full'>
          {/*logo part*/}
          <div className='pl-28 pt-1.5 pb-2'> 
            <img 
              src={VoltifyLogo} 
              alt="Voltify Logo"
              className='h-12 w-auto cursor-pointer' 
              onClick={() => navigate('/')}
            />
          </div>
          {/*menu button with dropdown*/}
          <div className='pl-6 relative'>
            <button 
              className='flex items-center gap-1'
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <IoMenuOutline className='text-2xl text-black hover:text-gray-900 h-8 w-auto'/>
              <span className='text-sm pl-0.5 pt-1'>Menu</span>
              <IoIosArrowDown className={`mt-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white border rounded-lg shadow-lg z-50">
                {/* Shop by Categories Section */}
                <div className="py-2">
                  <h3 className="px-4 py-2 text-sm font-semibold text-gray-500">Shop by Categories</h3>
                  <a href="/category/phones" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Mobile & Phones
                  </a>
                  <a href="/category/laptops" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Laptops
                  </a>
                  <a href="/category/tv" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    TV
                  </a>
                  <a href="/category/accessories" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Accessories
                  </a>
                </div>

                {/* Divider */}
                <hr className="my-1" />

                {/* Sales Section */}
                <div className="py-2">
                  <a href="/sales" className="block px-4 py-2 text-sm text-customPurple font-semibold hover:bg-gray-100">
                    Sales
                  </a>
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
              <button onClick={() => navigate('/cart')}>
                <BsCartFill className="h-6 w-auto" />
                <span className="absolute -top-2 -right-2 text-xs text-white rounded-full px-1 bg-customPurple">
                  {getCartCount()}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Header