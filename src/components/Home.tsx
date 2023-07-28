import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    //  bg-gradient-to-tr from-black to to-slate-800
    <div className='flex flex-col w-full h-screen sm:pl-12 sm:flex-row'>
        <div className='flex sm:w-5/12'>
            {/* Image */}
            <img src="/adon.png" alt="Profile" />
        </div>
        <div className='flex flex-col justify-center items-center text-white font-sans sm:w-7/12 gap-5'>
            <div className='flex gap-2'>
                <p>fb</p>
                <p>linked in</p>
            </div>
            <div className='flex flex-col items-center'>
                <p>Hi I'm</p>
                <h1>Adonis</h1>
                <p>Web Developer</p>
            </div>
            <div>
                <button className='bg-blue-700 rounded-md p-2 hover:bg-blue-800 duration-200'>
                    Download Resume
                </button>
            </div>
        </div>
        

    </div>
    
  )
}
