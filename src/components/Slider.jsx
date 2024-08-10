import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle' 
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper/modules';
import 'swiper/css/scrollbar';
import 'swiper/css';
import "swiper/css/effect-creative";

import{EffectFade} from "swiper/modules";



const Slider = () => {
  return (
    <Swiper className='swiper'
    modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    effect='fade'
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
  >
<SwiperSlide><img src="https://stylo.pk/cdn/shop/files/1920x600-_1_2abae439-d23b-42e8-b757-37a7d23a0058.jpg?v=1722583306" style={{width:"100%"}}/></SwiperSlide>
   <SwiperSlide><img src="https://stylo.pk/cdn/shop/files/1920x600_4_88a43786-990a-4dbe-9894-1e38f33fa77d.jpg?v=1721385925"style={{width:"100%"}}/></SwiperSlide>
  </Swiper>
  )
}

export default Slider
