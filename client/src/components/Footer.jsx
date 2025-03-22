import React from 'react'

import VoltifyLogo from "../assets/VoltifyLogo.png"
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";


function Footer() {
  return (
      <div className='flex '>
          {/* left div */}
          <div className='flex flex-col h-64 gap-12 w-1/3'>
              <div className='w-96'>
                  <img
                      src={VoltifyLogo}
                      alt="VoltifyLogo"
                      className='w-64 pl-12' />
              </div>

              <div className='h-full w-96 pl-12'>
                  <span className='text-[16px] font-normal'>Voltify provides you quality products with best prices and discounts available, So that you do not have to think twice before purchasing.</span>
              </div>

          </div>

          {/* right div */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-2/3'>
            <div className='flex flex-col gap-6'>
                <h2 className='text-xl font-extrabold'>Company</h2>
                <h3 className='text-lg font-normal'>About Us</h3>
                <h3 className='text-lg font-normal'>Our Team</h3>
                <h3 className='text-lg font-normal'>Customer Reviews</h3>
            </div>
            <div className='flex flex-col gap-6'>
                <h2 className='text-xl font-extrabold'>Information</h2>
                <h3 className='text-lg font-normal'>Help center</h3>
                <h3 className='text-lg font-normal'>Payment Methods</h3>
                <h3 className='text-lg font-normal'>Return & Refund</h3>
            </div>
            <div className='flex flex-col gap-6'>
                <h2 className='text-xl font-extrabold'>Contact</h2>
                <h3 className='text-lg font-normal flex items-center gap-2'><BsFillTelephoneFill/>(+1)123-456-789</h3>
                <h3 className='text-lg font-normal flex items-center gap-2'><IoMailSharp/>harrythakur2102@gamil.com</h3>
            </div>
          </div>
      </div>
  )
}

export default Footer