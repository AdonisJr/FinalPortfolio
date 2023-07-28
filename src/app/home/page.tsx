import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex w-full h-screen bg-gradient-to-tr from-black to to-slate-800'>
        <div className='flex flex-col justify-center items-center w-6/12 gap-5 text-white font-sans'>
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
        <div className='flex items-center justify-center w-6/12'>
            {/* Image */}
            <Image src='/adon.png' alt='Profile' height={800} width={300}/>
        </div>

    </div>
    
  )
}
