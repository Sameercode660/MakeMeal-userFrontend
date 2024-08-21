import React from 'react'
import Logo from '@/app/assets/MakeMeal.png'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from 'next/link';
import { BiSolidPhoneCall } from "react-icons/bi";

function Footer() {
  return (
    <div className='w-full bg-black text-white'>
      <div className=''>
        {/* upper */}
        <div className='flex justify-around pb-5 pt-5'>
          {/* image container */}
          <div className='w-[5.5rem] h-[5.5rem]'>
            <img src={Logo.src} alt="MM" className='rounded-full' />
          </div>
          {/* social links */}
          <div>
            <div className='text-right mb-1'>
              <span className='text-[1.1rem]'>Find us on</span>
            </div>
            <div className='flex gap-5'>
              <span><FaFacebook className='text-4xl'/></span>
              <span><FaInstagram className='text-4xl' /></span>
              <span><FaTwitter className='text-4xl' /></span>
            </div>
          </div>
        </div>
        {/* middle */}
        <div className='flex flex-col items-center'>
          {/* topic, legal and contact us section  */}
          <div className='flex w-full md:w-[80%] border-t border-t-gray-500 justify-around mt-5 mb-5 pb-2 pt-5'>
            {/* topic */}
            <div>
              <div>
                <span className='text-xl font-semibold'>Topics</span>
              </div>
              <div>
                <Link href="#" className='text-gray-400 font-semibold'>Order Biryani Online</Link>
              </div>
              <div>
                <Link href="#" className='text-gray-400 font-semibold'>Chicken Biryani Online</Link>
              </div>
              <div>
                <Link href="#" className='text-gray-400 font-semibold'>Veg Biryani Online</Link>
              </div>
            </div>
            {/* legal */}
            <div>
              <div>
                <span className='text-xl font-semibold'>Legal</span>
              </div>
              <div>
                <Link href="#" className='text-gray-400 font-semibold'>Terms & Conditions</Link>
              </div>
            </div>
            {/* contact us  */}
            <div>
              <div>
                <span className='text-xl font-semibold'>Contact Us</span>
              </div>
              <div>
                <Link href="#" className='text-gray-400 font-semibold'>Party Order</Link>
              </div>
              <div>
                <Link href="#" className='text-gray-400 font-semibold'>Mehfil By MakeMeal</Link>
              </div>
            </div>
          </div>
          {/* help by phone number section  */}
          <div className='w-full p-2' >
            <div className='w-full flex justify-center items-center gap-1 m-2'>
              <span><BiSolidPhoneCall />
              </span>
              <span>We are here to help you.
              Call us at 07700050050</span>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className='w-full border-t border-t-gray-500 flex justify-center items-center pb-5 pt-5'>
          <div>
            <span>Copyright © 2024. Make Meal - All Rights Reserved . Terms of use Privacy</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
