import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {AiOutlineRight} from "react-icons/ai";

function HeroSection() {
  return (
    <div>

      <div className="h-[550px] bg-gradient-to-r from-indigo-900 to-blue-400 flex justify-center items-center gap-x-32">

        <div >
        
          <div className='text-green-300 text-xs font-semibold mb-2'>25% OFF PROMOTIONAL SALE</div>

          <div className='font-bold text-white text-5xl mb-4'>All you need in <br /> the kitchen.</div>
          
          <div className='text-white text-sm font-thin mb-8'>You can get anything you want in this shopping app.<br />All you need is search your request and order it.</div>

          <button className='text-blue-800 bg-gradient-to-r from-green-200 to-green-500  px-6 py-3 rounded-lg font-bold text-xs'>Browse Products</button>
      
          <div className='flex mt-20'>
            
            <div className='h-15 w-[1px] opacity-4 bg-gray-600 mr-2'></div>

            <Stack>
              <Avatar sx={{width:36, height: 36}} alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukP1XxYcg45xAta3yjduROGXqit24hvaG0Q&usqp=CAU" />
            </Stack>
            
            <div className='text-white text-sm mt-2 mx-2 font-semibold'>Talk to an assistant </div> 

            <div className='text-white mt-3'><AiOutlineRight /> </div>

          </div>
     
        </div>

        <div>
          <img className='w-3/4 h-3/4 rounded-2xl' src='https://www.shutterstock.com/image-illustration/mixer-hand-kitchen-utensil-metal-600w-2153429309.jpg' />
        </div>

      </div>
   </div>
  )
}

export default HeroSection