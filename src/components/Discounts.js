import React,{useState,useEffect} from 'react';
import Slider from 'react-slick';
import Banners from '../api/Banners.json';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useWindowWidth } from '@react-hook/window-size';

function NextButton ({ onClick, className }) {
	return (
		<button className={`${className} text-blue-700`}  onClick={onClick}>
			<IoIosArrowForward size={22} />
		</button>
	)
}
function PrevButton ({ onClick, className }) {
	return (
		<button className={`${className} text-blue-700`} onClick={onClick}>
			<IoIosArrowBack size={22} />
		</button>
	)
}

function Discounts() {

  const [banners, setBanners] = useState([])
	const width = useWindowWidth()

	useEffect(() => {
		setBanners(Banners)
	}, [])

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
      <div className='mt-32 w-3/4 m-auto'>
        <h1 className='text-2xl font-bold text-blue-800'>Recent Discounts</h1>
        <Slider {...settings}>
          {banners && banners.map(banner=>(
            <div className='bg-white rounded-lg shadow-md text-center' key={banner.id}>
              <img className='w-full scale-75' src={banner.image} />
              <h1 className='font-semibold text-lg mb-2'>{banner.header}</h1>
              <h4 className='mb-2 font-semibold text-md text-blue-800'>{banner.content}</h4>
              <h6 className='font-bold text-md mb-2 text-xl'>${banner.price}</h6>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default Discounts;