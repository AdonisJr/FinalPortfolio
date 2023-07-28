import Link from 'next/link'
import React from 'react'

export default function NavbarLinks() {
  return (
    <div >
        <ul className='flex flex-col gap-10 sm:flex-row'>
            <Link href='#home' className='hover:text-slate-500 duration-300'>HOME</Link>
            <Link href='#about' className='hover:text-slate-500 duration-300'>ABOUT</Link>
            <Link href='#' className='hover:text-slate-500 duration-300'>PROJECT</Link>
            <Link href='#' className='hover:text-slate-500 duration-300'>CONTACT</Link>
            <Link href='#' className='hover:text-slate-500 duration-300'>BLOG</Link>
        </ul>
    </div>
  )
}
