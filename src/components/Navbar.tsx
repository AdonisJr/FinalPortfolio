"use client"
import React, { useState } from 'react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import NavbarLinks from './NavbarLinks';
import Link from 'next/link';

export default function Navbar() {
  const scrollPosition = useScrollPosition();
  const [navToggle, setNavToggle] = useState(false);

  const handleNavToggle = () =>{
      setNavToggle(!navToggle)
  }
  console.log(navToggle)
  return (
    <nav className={`${scrollPosition > 0 ? 'sm:bg-white sm:text-black' : 'shadow-none'} 
          bg-transparent flex flex-col justify-between items-center transition sm:sticky top-0 z-100 
          duration-1000 sm:pl-24 sm:flex-row sm:pr-12 sm:h-24`}
    >
      <div className='w-full flex justify-between p-5 sm:w-auto'>
        <Link href='/' className='font-mono text-blue-600 text-xl'>
          <span 
            className={`font-black font-sans ${scrollPosition > 0 ? 'sm:text-yellow-600 text-white' : 'text-yellow-300'}`}
          >
            Adonis
          </span>
        </Link>
        <button 
          className='fixed right-5 sm:hidden z-10'
          onClick={handleNavToggle}
        >
          {
            navToggle ? 
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" 
            className="text-black duration-400 bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg> :
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="duration-400 bi bi-list" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          }
            
        </button>
      </div>
      <div className=''>
        <NavbarLinks navToggle={navToggle}/>
      </div>
    </nav>
  )
}
