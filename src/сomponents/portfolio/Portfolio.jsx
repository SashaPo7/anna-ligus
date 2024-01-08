import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import MenuPortfolio from './MenuPortfolio';

function Portfolio () {
  const items = [
    {
      id: 1,
      img: './img/galery10.png',
      title: 'Galery',
      href: '/portfolio',
    },
    {
      id: 2,
      img: './img/galery22.png',
      title: 'nude' ,
      href: '/portfolio/nude' ,
    },
    {
      id: 3,
      img: './img/colored-light.png',
      title: 'colored light',
      href: '/portfolio/light'
    },
    {
      id: 4,
      img: './img/magazines.png',
      title: 'magazines' ,
      href: '/portfolio/magazines'
    },
    {
      id: 5,
      img: './img/interior.png',
      title: 'interior',
      href: '/portfolio/interior'
    }
  ];


  return (
    <div className="w-[300px] mob:w-[361px] sm:w-[100%] py-[60px] m-auto sm:m-0 pl-0 sm:pl-6 lg:pl-9 xl:pl-[52px] 3xl:pl-[120px]">
      <h2 id='Portfolio' className='border-b-[1px] border-[#D9D9D9] sm:mr-6 lg:mr-9 xl:mr-[52px] 3xl:mr-[120px]'>Portfolio</h2>
      <MenuPortfolio/>
      <div className='portfolio hidden sm:block sm:h-[410px] lg:h-[484px] sm:pt-[42px]'>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={16}
        modules={[Navigation]}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="mySwiper portfolio"
      >
        <div className='swiper-wrapper lg:h-[484px]'>
        {
          items.map(obj => (
            <SwiperSlide key={obj.id} className='flex flex-col sm:h-[410px] lg:h-[484px] sm:pt-[42px] ml-0 cursor-pointer'>
              <Link to={obj.href}>
              <img src={obj.img} alt="" tabIndex="0" className=''/>
              <h3 className='block'>{obj.title}</h3>
              </Link>
            </SwiperSlide>
          ))
        }
        </div>
        <div className='relative sm:hidden lg:block h-[40px]'>
          <div className="swiper-button-next">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="19.5" stroke="#F2F2F2"/>
              <path d="M17 14L24 20L17 26" stroke="#F2F2F2" strokeWidth="5" strokeLinecap="square"/>
            </svg>
          </div>
          <div className="swiper-button-prev">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="19.5" transform="rotate(180 20 20)" stroke="#F2F2F2"/>
              <path d="M22 26L15 20L22 14" stroke="#F2F2F2" strokeWidth="5" strokeLinecap="square"/>
            </svg>
          </div>
        </div>
      </Swiper>
    </div>
    </div> 
  )
}

export default Portfolio;

