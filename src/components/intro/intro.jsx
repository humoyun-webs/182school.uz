import React, { useEffect } from 'react';
import './intro.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Intro() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className='intro'>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide>
          <h1 className='intro__heading'>
            <span className='intro__span'>
              <i className='intro__i'></i>
            </span>
            <span className='intro__span'>
              <i className='intro__i'>
                Посмотрите видео чтоб узнать больше о нашей школе{' '}
              </i>
            </span>
          </h1>
          <p className='intro__p'>
            Create, prototype, collaborate, and bring your ideas to life with the design
            platform used by over one million people — from freelancers, to the world’s
            largest teams.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className='intro__heading'>
            <span className='intro__span'>
              <i className='intro__i'></i>
            </span>
            <span className='intro__span'>
              <i className='intro__i'>
                Посмотрите видео чтоб узнать больше о нашей школе{' '}
              </i>
            </span>
          </h1>
          <p className='intro__p'>
            Create, prototype, collaborate, and bring your ideas to life with the design
            platform used by over one million people — from freelancers, to the world’s
            largest teams.
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Intro;
