"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Header = () => {
    const[nav, setNav] = useState(false)
    
  return (
    <div className='w-full fixed h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center gap-3 w-full h-full px-2 2xl:px-8'>
            <h2 className='text-2xl font-bold text-gray-500 tracking-widest'>My Portfolio</h2>
        
        <div>
        <ul className='hidden md:flex'>
            <Link href = "/">
                <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href = "/#about">
                <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href = "/#skills">
                <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href = "/#projects">
                <li className='ml-10 text-sm uppercase hover:border-b'>projects</li>
            </Link>
            <Link href = "/#contact">
                <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
            </Link>
        </ul>
        <div className='md:hidden' onClick={() => setNav(!nav)}>
            <AiOutlineMenu size={25}/>
        </div>
        </div>
        </div>
    <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
            <div>
                <div className='w-full flex items-center justify-between'>
                <h2 className='text-2xl font-bold text-gray-500 tracking-widest'>My Portfolio</h2>
                <div onClick={() => setNav(!nav)} className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer'>
                    <AiOutlineClose size={25}/>
                </div>
                </div>
                <div className='border-b border-gray-300 my-4'>
                   <p className='w-[85%] md:w-[90%] py-4'> Let's Build Together</p>
                </div>
            </div>
            <div>
        <ul className='py-4 flex flex-col'>
            <Link onClick={() => setNav(false)} href = "/">
                <li className='py-4 text-sm'>Home</li>
            </Link>
            <Link onClick={() => setNav(false)} href = "/#about">
                <li className='py-4 text-sm'>About</li>
            </Link>
            <Link onClick={() => setNav(false)} href = "/#skills">
                <li className='py-4 text-sm'>Skills</li>
            </Link>
            <Link onClick={() => setNav(false)} href = "/#projects">
                <li className='py-4 text-sm'>projects</li>
            </Link>
            <Link onClick={() => setNav(false)} href = "/#contact">
                <li className='py-4 text-sm'>Contact</li>
            </Link>
        </ul>
        <div className='pt-40'> 
            <p className='uppercase tracking-widest text-[#5651e5]'>Let's connect</p>
            <div className='flex justify-between items-center my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsFillPersonLinesFill  />
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>

    </div>
  )
}

export default Header