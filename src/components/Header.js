import React, {useState} from 'react';
import ReactFlagsSelect from 'react-flags-select';
import {AiOutlineShoppingCart,AiOutlineDown,AiOutlineSearch} from 'react-icons/ai';

function Header() {

  const [selected, setSelected] = useState('US');

  return (
    <>
      <div className='bg-blue-600'>
        
        <div className='container flex h-16 justify-between items-center pl-32 pr-64 text-sm font-medium font-sans text-white	'>
          
          <a href='#'>
            <img className="w-16 h-16" src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Eo_circle_light-blue_white_letter-n.svg/1200px-Eo_circle_light-blue_white_letter-n.svg.png' />
          </a>

          <div className='flex gap-x-2 items-center'>
            <div>All Products</div>
            <AiOutlineDown size={10} />
            <input className='w-96 py-2 rounded-lg outline-none text-black ml-4' placeholder=" Enter keywords"></input>
          </div>

          <nav className='flex gap-x-6 items-center'>

            <div className='flex items-center gap-x-2'>
              Account
              <span className='pt-1'><AiOutlineDown size={10} /></span>
            </div>

            <br></br>

            <div>
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