import React, {useState} from 'react';
import ReactFlagsSelect from 'react-flags-select';
import {AiOutlineShoppingCart,AiOutlineDown,AiOutlineSearch} from 'react-icons/ai';

function Header() {

  const [selected, setSelected] = useState('US');

  return (
    <>
      <div className="bg-indigo-700 opacity-3">
        
        <div className='container flex h-16 justify-between items-center pl-32 pr-64 text-sm font-medium font-sans text-white sm:mx-auto'>
                
          <a href='#'>
            <img className="w-16 h-16 hidden 2xl:flex" src='https://www.shutterstock.com/image-vector/catering-company-logotype-lettering-written-600w-1049758142.jpg' />
          </a>

          <div className='items-center hidden lg:flex'>
            <div className='bg-black flex px-2 py-2 pr-0 mr-0 rounded-l-lg'>
              <div>All Products</div>
              <AiOutlineDown size={12} className="mt-1.5 ml-1 mr-1" />
            </div>
            <input className='w-96 py-2 rounded-r-lg outline-none text-black ml-0 pl-0 mr-2' placeholder=" Enter keywords"></input>
            <AiOutlineSearch className='' />
          </div>

          <nav className='flex gap-x-6 items-center'>

            <div className='flex items-center gap-x-2'>
              Account
              <span className='pt-1'><AiOutlineDown size={10} /></span>
            </div>

            <br></br>

            <div className='hidden sm:flex'>
              <ReactFlagsSelect
                onSelect={code => setSelected(code)}
                selected={selected}
                className="flag-select"
              />
            </div>

            <div className='flex items-center gap-x-2'>
              <AiOutlineShoppingCart />
              Cart
            </div>

          </nav>
          
        </div>

      </div>
    </>
  )
}

export default Header