import React, { useState,useEffect } from 'react';
import Slider from 'react-slick';
import Banners from '../api/Banners.json';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai';
import { useWindowWidth } from '@react-hook/window-size'

function NextButton ({ onClick, className }) {
	return (
		<button className={`${className} text-purple-700`} onClick={onClick}>
			<AiOutlineArrowRight size={22} />
		</button>
	)
}

function PrevButton ({ onClick, className }) {
	return (
		<button className={`${className} text-purple-700`} onClick={onClick}>
			<AiOutlineArrowLeft size={22} />
		</button>
	)
}

function Categories() {

  const width = useWindowWidth()

  const [banners,setBanners]=useState([]);

  useEffect(()=>{
    setBanners(Banners);
  });

  const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		nextArrow: <NextButton />,
		prevArrow: <PrevButton />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1
				}
			}
		]
	};


  return (
    <>
      <div className='mt-16'>
        <Slider {...settings}>
          {banners && banners.map(banner => (
            <div style={{backgroundImage: `url(${banner.image})`}}  key={banner.id}>
              x
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default Categories