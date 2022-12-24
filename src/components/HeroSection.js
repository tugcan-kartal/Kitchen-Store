import React from 'react'

function HeroSection() {
  return (
    <div>

      <div className="h-[500px] bg-center bg-no-repeat bg-cover flex flex-col justify-evenly items-center" style={{backgroundImage: 'url(https://i.pinimg.com/originals/d3/6d/46/d36d462db827833805497d9ea78a1343.jpg)'}}>
        
        <div>
          <h1 className='mt-12 font-semibold text-2xl md:text-4xl text-gray-200'>All you need in <br /> the kitchen.</h1> 
        </div>

        <div>
          <p className='text-gray-200 font-bold'>Lorem Ipsum has been the industry's <br></br> standard dummy text ever since the 1500s, when an unknown <br></br> printer took a galley of type</p>
        </div>
        
        <div>
          <button className='rounded-lg h-8 px-8 transition-colors bg-yellow-700 bg-opacity-10 text-white text-sm font-semibold hover:bg-yellow-900 hover:text-white '>Browse Products</button>
        </div>
        
      </div>

   </div>
  )
}

export default HeroSection