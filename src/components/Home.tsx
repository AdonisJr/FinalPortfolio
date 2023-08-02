import React from 'react';
import Link from 'next/link';
import SocialMedia from './SocialMedia';

export default function Home() {
  return (
    //  bg-gradient-to-tr from-black to to-slate-800
    <div className='flex flex-col gap-2 w-full min-h-screen sm:pl-12 sm:flex-row'>
        <div className='flex items-center justify-center sm:w-5/12'>
            {/* Image */}
            <img className='rounded-full shadow-md' src="/adon1.png" alt="Profile" />
        </div>
        <div className='flex flex-col justify-center
        items-center text-white font-sans sm:w-7/12 gap-5'>
            {/* social media */}
            <SocialMedia />
            <div className='flex flex-col gap-5 py-5'>
                <p className='text-3xl'>Hello There!</p>
                <p className='text-6xl'>Adonis Jr Suico</p>
                <p className='text-5xl'>Web Developer</p>
            </div>
            <div className='flex text-sm sm:text-md pt-10 gap-2 items-center'>
                <Link href='#projects' className='flex items-center gap-1 bg-yellow-300 text-black rounded-md py-2 px-3 hover:bg-yellow-400 duration-200'>
                    See my work
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-chevron-double-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                        <path fillRule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </Link>
                <span className='text-slate-400'>| |</span>
                <a href='https://export-download.canva.com/mqLZI/DAFM6hmqLZI/79/0-2023640550994285006.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20230801%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230801T162133Z&X-Amz-Expires=49958&X-Amz-Signature=c65de8af67fe43c0658def9b5a0115417d50d5700c23a2f15cfac38b7519157b&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Black%2520and%2520White%2520Minimalist%2520Simple%2520Design%2520Freelancer%2520Resume.pdf&response-expires=Wed%2C%2002%20Aug%202023%2006%3A14%3A11%20GMT' 
                target='_blank' className='flex items-center gap-1 bg-white text-black rounded-md py-2 px-3 hover:bg-slate-500 hover:text-white duration-200'>
                    Download Resume
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cloud-download" viewBox="0 0 16 16">
                        <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                        <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
                    </svg>
                </a>
            </div>
        </div>
        

    </div>
    
  )
}
