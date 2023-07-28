"use client"
import React from 'react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import NavbarLinks from './NavbarLinks';

const classNames = (...classes: any) =>{
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const scrollPosition = useScrollPosition();
  console.log(scrollPosition)
  return (
    <nav className={classNames(scrollPosition > 0 ? 'bg-white text-black' : 'shadow-none bg-transparent',
     'flex flex-col justify-between items-center transition sticky top-0 z-100 duration-1000 sm:pl-24 sm:flex-row sm:pr-12 sm:h-24')}>
      <div className='font-mono text-blue-600 text-xl'>
        Adonis
      </div>
      <div className='font-sans'>
        <NavbarLinks />
      </div>
    </nav>
  )
}
