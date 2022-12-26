import React from 'react';
import {GiClothes} from "react-icons/gi";
import {FaTools} from "react-icons/fa";
import {MdDirectionsBike} from "react-icons/md";

function Promotions() {
  return (
    <div>

        <h1 className='font-bold text-2xl text-blue-800 mb-8 ml-48 mt-16'>Active Promotions</h1>

        <div className='grid grid-cols-3 w-3/4 gap-x-16 m-auto'>

            <div className='flex flex-col w-80 bg-gray-100 rounded-lg shadow-md text-center'>
                <img src='https://img.freepik.com/free-photo/beautiful-teen-girl-hiding-her-neck-collar-woolen-sweater-with-broad-smile-female-model-posing-wearing-cool-warm-outfit-bending-head-side-joy-happiness-concept_176420-10960.jpg?w=2000'/>
                <div> 
                  <div className='ml-32' ><GiClothes size={50} className="text-gray-500 mt-8 mb-4"/> </div>
                  <div className='font-bold text-lg text-blue-800'>Up to 25% off on all <br /> casual sweaters</div>
                  <button className='mt-2 bg-white rounded-lg px-4 py-2 text-blue-900 text-sm'>Browse Products</button>
                </div>
            </div>

            <div className='flex flex-col w-80 bg-blue-100 rounded-lg shadow-md text-center'>
                <div className='m-auto'><FaTools size={40} className="text-gray-500 mt-8 mb-4"/></div>
                <div className='font-bold text-lg text-blue-800'>Up to 20% off on beauty products</div>
                <button className='mt-2 bg-white rounded-lg w-1/2 m-auto py-2 text-blue-900 text-sm mb-4'>Browse Products</button>
                <img src='https://ae01.alicdn.com/kf/Sd06011f8c57b427eba038273c2c6ae1b4/TERRE-D-HORSE-100-Ml-Men-Parfume-Fragrance-Deodorant-EDT-EDP.jpg_Q90.jpg_.webp' />
            </div>

            <div className='flex flex-col w-80 bg-green-50 rounded-lg shadow-md text-center'>
                <img src='https://cdn.myshoptet.com/usr/www.ecafebike.com/user/shop/big/163-6_e-cafe-bike-model-espresso-e-bike-for-almost-any-terrain-vykonne-mestske-elektrokolo--blue-.jpg?62cff1c1'/>
                <div className='m-auto'><MdDirectionsBike size={50} className="text-gray-500 mt-8 mb-4"/></div>
                <div className='font-bold text-lg text-blue-800'>Exciting bike rides with amazing equipment</div>
                <button className='mt-2 bg-white rounded-lg w-1/2 m-auto py-2 text-blue-900 text-sm'>Browse Products</button>
            </div>

        </div>

    </div>
  )
}

export default Promotions