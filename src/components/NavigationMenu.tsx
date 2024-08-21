'use client'
import React, { useState } from 'react'
import { FaPhoneSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import Logo from '@/app/assets/MakeMeal.png'
import Image from 'next/image';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosLogOut } from "react-icons/io";
import { ImCross } from "react-icons/im";
import Link from 'next/link';

function NavigationMenu() {

    const [open, setOpen] = useState<boolean>(false)

    return (

        <>
            <div className='w-full h-[5rem] border-b flex justify-around items-center sticky top-0'>
                {/* logo and name  container*/}
                <div className='flex items-center'>
                    <div>
                        <Image src={Logo} alt='MM' width={70} height={70} className='rounded-full'></Image>
                    </div>
                    <div>
                        <h1 className="font-extrabold text-transparent text-3xl sm:text-4xl xl:text-5xl bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-transparent h-full">Meak Meal</h1>
                    </div>
                </div>

                {/* call us, search, cart, avatar  */}
                <div className='flex w-1/2 justify-evenly h-full items-center max-sm:hidden'>
                    {/* call us */}
                    <div className='flex items-center space-x-2'>
                        <div>
                            <FaPhoneSquare className='text-2xl' />
                        </div>
                        <div>
                            <p className='text-[14px] text-gray-500'>call us at</p>
                            <p className='text-[16px] text-black font-semibold'>6394867435</p>
                        </div>
                    </div>

                    {/* search  */}
                    <div className='flex flex-col justify-center items-center'>
                        <FaSearch className='text-2xl' />
                        <span className='text-[14px] text-gray-500 font-semibold'>search</span>
                    </div>
                    {/* cart  */}
                    <div className='flex flex-col justify-center items-center'>
                        <Link href="/home/cart">
                            <FaShoppingCart className='text-2xl' />
                            <span className='text-[14px] text-gray-500 font-semibold'>cart</span>
                        </Link>
                    </div>
                    {/* avatar  */}
                    <div className='flex flex-col justify-center items-center'>
                        <RxAvatar className='text-2xl' />
                        <span className='text-[14px] text-gray-500 font-semibold'>avatar</span>
                    </div>
                </div>
                {/* hamburger menu  */}
                <div>
                    {
                        open ? (
                            <ImCross className='text-2xl sm:hidden' onClick={() => {
                                setOpen(prev => !prev)
                            }} />
                        ) : (<GiHamburgerMenu className='text-2xl sm:hidden' onClick={() => {
                            setOpen(prev => !prev)
                        }} />)


                    }
                </div>
            </div>
            {/* Responsive Menu  */}
            <div className={`flex flex-col space-y-5 sm:hidden w-[100%] h-[100%] z-20 fixed bg-white border-r transition-all duration-100 ease-in ${open ? 'left-0' : 'left-[-100%]'} `}>
                {/* avatar  */}
                <div className='border-b border-gray-300 flex justify-center items-center flex-col p-2'>
                    <div >
                        <RxAvatar className='text-9xl' />
                    </div>
                    <div>
                        User
                    </div>
                </div>
                {/* search  */}
                <div className='w-full flex justify-center'>
                    <div className='flex w-[70%] border-2 border-gray-500 p-1 rounded-full justify-center space-x-5'>
                        <span>Search</span>
                        <FaSearch className='text-2xl text-gray-500' />
                    </div>
                </div>
                {/* cart  */}
                <div className='w-full flex justify-center'>
                    <div className='flex w-[70%] border-2 border-gray-500 p-1 rounded-full justify-center space-x-5'>
                        <span>Cart</span>
                        <FaShoppingCart className='text-2xl text-gray-500' />
                    </div>
                </div>
                {/* call us  */}
                <div className='flex justify-center items-center space-x-2'>
                    <div>
                        <FaPhoneSquare className='text-2xl' />
                    </div>
                    <div>
                        <p className='text-[14px] text-gray-500'>call us at</p>
                        <p className='text-[16px] text-black font-semibold'>6394867435</p>
                    </div>
                </div>
                {/* logout  */}
                <div className='w-full flex justify-center'>
                    <div className='flex w-[70%] border-2 border-gray-500 p-1 rounded-full justify-center space-x-5'>
                        <span>Log Out</span>
                        <IoIosLogOut className='text-2xl text-gray-500' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavigationMenu
