import Link from 'next/link';
import React from 'react';

interface UIProps{
  navToggle: boolean
}

export default function NavbarLinks({navToggle}: UIProps) {
  return (
    <div >
        <ul className={`gap-10 ${navToggle ? 
            // only fires in small device
            // if toggle open
          'flex flex-col fixed  h-screen w-screen top-0 left-0 justify-center items-center opacity-90 text-black bg-white' 
            : 
            // if toggle closed
          'hidden sm:flex sm:flex-row'}
          `}>
            <Link href='#home' className='hover:text-slate-500 duration-300'>
              HOME
            </Link>
            <Link href='#about' className='hover:text-slate-500 duration-300'>
              ABOUT
            </Link>
            <Link href='#projects' className='hover:text-slate-500 duration-300'>
              PROJECT
            </Link>
            <Link href='#' className='hover:text-slate-500 duration-300'>
              CONTACT
            </Link>
            <Link href='#' className='hover:text-slate-500 duration-300'>
              BLOG
            </Link>
            
        </ul>
    </div>
  )
}
