import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

function AboutMe () {

  const items = [
    { 
      id: 1,
      text: "I was born in St. Petersburg in the Russian Federation. This city, its surroundings and the perpetually cloudy weather plunged me into melancholy. Which affected my style. Now I have moved to a stunning sunny Georgia, but the anxiety and sadness of the past does not leave me. I've been doing photography since I was young, it's been my passion throughout my life. It started as a hobby and a couple of words the main activity."
    },
    {
      id: 2,
      text: "I have 32 publications in magazines since 2021 such as Selin, Art of Portrait, Hunter and others.They also got on the covers of Top Posters, Marika and others. She gave an interview for Le Desire Magazine.My photos were marked in Iconic, Dehazed, PhotoVogue, Sguardo. Gave a lecture for the Amlab photo school in 2023."
    },
    {
      id: 3,
      text: "Mostly I shoot self-portraits in a melancholic style. I vent my sadness and anxiety in my works and this is therapeutic for me.  In my works, I focus on the emotional component, and my heroes are faceless characters. Everyone who experiences difficult emotions in my works can see themselves and feel not alone. This genre gives me freedom in what I want to say with my pictures and does not put restrictions on their implementation."
    } 
  ]

  return (
    <div className="w-[300px] mob:w-[361px] sm:w-[592px] lg:w-[952px] xl:w-[1336px] 3xl:w-[1680px] py-[60px] xl:py-[80px] m-auto">
      <h2 id="AboutMe" className='border-b-[1px] border-[#D9D9D9]'>About me</h2>
      <div className='lg:flex lg:gap-[50px] xl:gap-[100px] sm:px-6 lg:px-[50px] xl:px-0 xl:w-[1200px] xl:m-auto lg:pt-[42px] 3xl:pt-[62px] lg:items-center'>
        <img src="./img/about-me.png" alt="" className='pb-[50px] lg:pb-0 pt-[42px] lg:pt-0 m-auto lg:w-[404px] xl:w-[548px] lg:h-[296px] xl:h-[410px]'/>
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          modules={[Navigation, Pagination]}
          loop={true}
          pagination={{clickable: true,}}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="mySwiper"
        >
          {
            items.map(obj => (
              <SwiperSlide key={obj.id} className='about pb-8'>
                <p>{obj.text}</p>
              </SwiperSlide>
            ))
          }

          <div className='relative h-[40px]'>
            <div className="swiper-button-next bg">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="19.5" stroke="#F2F2F2"/>
                <path d="M17 14L24 20L17 26" stroke="#F2F2F2" strokeWidth="5" strokeLinecap="square"/>
              </svg>
            </div>
            <div className="swiper-button-prev bg">
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

export default AboutMe;