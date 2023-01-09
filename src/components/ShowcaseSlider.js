import React from 'react';

// import testimonials data
import {toys} from '../data';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../slider.css';

// import required modules
import { Pagination } from 'swiper';

const ShowcaseSlider = () => {
  return (
    <Swiper
      slidesPerView={'auto'}
      centeredSlides={true}
      spaceBetween={20}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='mySwiper bg-carousel'
    >
      {toys.map((slide, index) => {
        // destructure slide
        const { image } = slide;
        return (
          // slide
          <SwiperSlide
            key={index}
            className='bg-carousel rounded-[20px] border border-accent-primary xl:max-w-[645px] max-h-[700px] pt-[60px] px-[35px] xl:px-[70px] pb-[50px] flex items-start gap-x-[30px] shadow-xl'
          >
            {/* avatar image */}
            <img src={image} alt='' style={{alignSelf:'center'}} />
            
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ShowcaseSlider;
