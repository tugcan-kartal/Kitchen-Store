import React, {useState} from 'react';
import ReactFlagsSelect from 'react-flags-select';
import {AiOutlineShoppingCart} from 'react-icons/ai';

function Header() {

  const [selected, setSelected] = useState('US');

  return (
    <>
      <div className='bg-blue-600'>
        
        <div className='container flex h-16 justify-between items-center pl-32 pr-64 text-sm font-medium font-sans text-white	'>
          
          <a href='#'>
            <img className="w-16 h-16" src='https://i.pinimg.com/originals/5f/6b/82/5f6b821ad9ae187d3724387e0b40467e.jpg' />
          </a>

          <div>
            <input className='w-96 py-2 rounded-lg outline-none text-black' placeholder='Enter keywords'></input>
          </div>

          <nav className='flex gap-x-6 items-center'>

            <div>
              Account
            </div>

            <br></br>

            <div>
              <ReactFlagsSelect
                onSelect={code => setSelected(code)}
                selected={selected}
                className="flag-select"
              />
            </div>

            <div>
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