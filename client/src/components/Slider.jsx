import React, { useCallback, useEffect, useRef } from 'react'
import { useState } from 'react'

{/*Icons*/}
import { RiArrowLeftWideFill,  RiArrowRightWideFill, RiLinkM } from "react-icons/ri";
import { TfiLayoutLineSolid } from "react-icons/tfi";

function Slider({slides}) {

    const timeRef = useRef(null);  
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrev = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, slides]);

    const goToSlide = slideIndex => {
      setCurrentIndex(slideIndex);
    }

    useEffect(() => {
      if(timeRef.current)
      {
        clearTimeout(timeRef.current);
      }
      console.log('use effect')
      timeRef.current = setTimeout(() => {
        goToNext();
      },2500)

      return () => clearTimeout(timeRef.current);
    }, [goToNext]);

  return (
    <div className='h-[90lvh] relative'>

        <div className='absolute top-1/2 translate-y-[-50%] left-8 text-5xl text-white z-[1] cursor-pointer'
        onClick={goToPrev}
        ><RiArrowLeftWideFill className=' text-6xl hover:opacity-40'/></div>

        <div className='absolute top-1/2 translate-y-[-50%] right-8 text-5xl text-white z-[1] cursor-pointer'
        onClick={goToNext}
        ><RiArrowRightWideFill className='text-6xl hover:opacity-40'/></div>

        {/* slider div*/}
        <div 
        className="w-full h-full bg-center bg-cover" 
        style={{backgroundImage: `url(${slides[currentIndex].url})`}}
        
        >
        </div>

        {/*slider linings*/}
        <div
        className='flex gap-5  justify-center relative bottom-12'>
          {slides.map((slide, slideIndex) => (
            <div 
            className='cursor-pointer text-6xl font-normal text-gray-300 hover:text-gray-400'
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            ><TfiLayoutLineSolid className=''/></div>
          ))}
        </div>
    </div>

  )
}

export default Slider