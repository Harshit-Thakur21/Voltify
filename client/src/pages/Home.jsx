import Header from '../components/Header'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Body from '../components/Body'
import Footer from '../components/Footer'

function Home() {
  const slides = [
    {url: '../../slides/AppleSlide.jpg', title: 'Slide1'},
    {url: '../../slides/GoogleSlide.jpg', title: 'Slide2'},
    {url: '../../slides/SamsungSlide.jpg', title: 'Slide3'},
    {url: '../../slides/TvSlide.jpg', title: 'Slide4'},

  ];

  return (
    <div className=''>
      <Header/>
      <div className='w-full mx-auto'>
        <Slider slides={slides} />
      </div>

      <div className='my-10'>
      <Categories/>
      </div>

      <div className='my-32'>
        <Body/>
      </div>

      <div className='my-32'>
        <Footer/>
      </div>

    </div>
  )
}

export default Home
