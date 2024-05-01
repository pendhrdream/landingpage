// export default Navbar;
import { useState } from 'react';
import React from 'react';
import Logo from '../assets/logo.png';
import BookDemo from './forms/BookDemo';
import Login from './forms/Login';
import { FaBars, FaXmark } from "react-icons/fa6";

function Navbar({ handleItemClick }) {
  const [ ismenuopen, setIsmenuopen ] = useState(false);

  const togglemnu = () => {
    setIsmenuopen(!ismenuopen);
  }

  // Menü öğeleri
  const menuItems = [
    { label: 'Home', id: 'Home' },
    { label: 'Solutions', id: 'Solutions' },
    { label: 'Products', id: 'Products' },
    { label: 'Industries', id: 'Industries' },
    { label: 'About', id: 'About' },
    { label: 'Legal', id: 'Policy' },
  ];

  return (
    <>
      <nav className='w-full bg-white md:px-14 py-2 mx-auto border-b text-purple-600 fixed top-0 ' style={{ zIndex: 1000 }}>
        <div className=' container mx-auto flex justify-between items-center font-medium'>
          <div className='  flex  space-x-14 items-center'>
            <a href="/" className='text-2xl flex item-center space-x-3 ' ><img className='w-[80px]' src={Logo} alt="Logo" /></a>
            <ul className='md:flex  space-x-12 hidden'>
              {menuItems.map(item => (
                <li key={item.id} onClick={() => handleItemClick(item.id)} className='block hover:text-gray-300 cursor-pointer '>
                  <a href={`#${ item.id }`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='md:hidden'>
            <button onClick={togglemnu} className='ml-[300px] text-white focus-outline-none focus-text-gray'>
              {ismenuopen ? (<FaXmark className='w-6 h-6 text-purple-700' />) : (<FaBars className='w-6 h-6 text-purple-700' />)}
            </button>
          </div>
          <Login />
          <BookDemo />
        </div>

      </nav>

      <div className={`ml-auto z-50 space-y-4 pt-4 pb-5 px-4 bg-purple-950 ${ ismenuopen ? 'block fixed top-0 left-0 right-0' : 'hidden' }`}>
        {menuItems.map(item => (
          <li key={item.id} onClick={() => handleItemClick(item.id)} className='block hover:text-gray-300 cursor-pointer '>
            <a href={`#${ item.id }`}>{item.label}</a>
          </li>
        ))}

      </div>
    </>
  );
}

export default Navbar;
