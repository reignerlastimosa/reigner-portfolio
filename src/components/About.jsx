import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { data } from "../data/data.js";
import SwiperCore, { Autoplay } from 'swiper';

import 'swiper/swiper.min.css';

SwiperCore.use([Autoplay]);

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1C1C1C] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full mx-auto'>
          <div className='text-4xl font-bold inline ' style={{ borderBottom: '4px solid #E50072' }}>
            About
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-4 justify-center items-center mt-10'>
            <div className='text-3xl font-bold'>
              <p>Hi. I'm Reigner, I create and design websites, apps, data analytics dashboard, machine learning models, database, ETL, and more.</p>
            </div>
            <div className='swiper-container flex ' style={{ width: '90%' }}>
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false
                }}
              >
                {data.map((d) => (
                  <SwiperSlide key={d.id}>
                    <img className="rounded-lg" src={d.image} alt={d.alt} style={{ maxWidth: '100%' }} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

