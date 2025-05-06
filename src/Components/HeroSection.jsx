import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function HeroSlider() {
  const slides = [
    {
      img: 'https://i.ibb.co.com/N6L0DfPt/Bid3-min.png',
      title: 'Tech Conferences 2025',
      subtitle: 'Stay ahead with the latest in innovation',
    },
    {
      img: 'https://i.ibb.co.com/N26HnVz1/image8.jpg',
      title: 'Connect & Collaborate',
      subtitle: 'Join exciting local meetups around you',
    },
    
    {
      img: 'https://i.ibb.co.com/nqDYhzLP/image5.jpg',
      title: 'Community Events',
      subtitle: 'Discover fun activities and networking opportunities',
    },
  ];

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-xl  ">
      <Swiper
        spaceBetween={30}
        effect="fade"
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full max-h-[350px]">
              <img
                src={slide.img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>

              {/* Text Content */}
             
              <div className="absolute inset-0 flex flex-col justify-center items-center px-4 space-y-4 text-center">
  <h2 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow-md">
    {slide.title}
  </h2>
  <p className="text-white text-lg md:text-2xl font-medium drop-shadow-sm max-w-2xl">
    {slide.subtitle}
  </p>
</div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
