import banner1 from '../../assets/Banner1.jpg'
import banner2 from '../../assets/Banner2.jpg'
import banner3 from '../../assets/Banner3.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay styles

import './Banner.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module


const Banner = () => {
    return (
        <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 5000, // 3 seconds delay
        disableOnInteraction: false, // Keep autoplay running even after user interaction
      }}
      modules={[Pagination, Autoplay]} // Include Autoplay module
      className="mySwiper"
    >
      <SwiperSlide>
        <div className='w-full lg:h-[calc(100vh-80px)] relative'>
          <img className='w-full lg:h-[calc(100vh-81px)]' src={banner1} alt="" />
          
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full lg:h-[calc(100vh-76px)]'>
          <img className='w-full lg:h-[calc(100vh-40px)]' src={banner2} alt="" />
          
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-full lg:h-[calc(100vh-76px)]'>
          <img className='w-full lg:h-[calc(100vh-76px)]' src={banner3} alt="" />
          
        </div>
      </SwiperSlide>
    </Swiper>
    );
};

export default Banner;