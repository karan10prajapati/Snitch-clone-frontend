import React, { useRef, useState } from 'react';
import { list } from '../../constants/orderpage/Data'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.c3ss';

// import required modules
import { Pagination } from 'swiper/modules';

export default function OrderBaraNew() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full"
      >

        { 
           list.map ( (item) => {  
            return  <SwiperSlide><div className="flex flex-col gap-1 pt-3  items-center ">{item.icon} <div className="text-center text-sm">
                 {item.label} </div></div> </SwiperSlide>
         })
        }
      </Swiper>
    </>
  );
}
