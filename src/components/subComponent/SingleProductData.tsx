'use client'

import React, { useState } from 'react'
import logo from '@/app/assets/MakeMeal.png'
import { Button } from '../ui/button'
import { handleItemsToCart } from '@/utils/addItemsToCart'

interface propsType {
  productId: string
  name: string
  description: string
  price: number
  imageUrl: string
}


function SingleProductData({ productId, name, description, price, imageUrl }: propsType) {


  const [adding, setAdding] = useState<string>('Add')

  async function addToCart(e: React.MouseEvent<HTMLButtonElement>) {

    e.preventDefault()
    e.stopPropagation()
    setAdding('Adding')
    const userId = localStorage.getItem('id')
    const quantity = 1
    const response = await handleItemsToCart({ productId, userId, quantity })
    setAdding('Added')
    const timeout = setTimeout(() => {
      setAdding('add')
      clearTimeout(timeout)
    }, 2000)
  }

  return (
    <div className='w-full flex justify-center items-center flex-wrap md:h-[70vh] border'>
      {/* image container  */}
      <div className='w-[585px] h-[400px] m-1'>
        <img src={imageUrl} className='w-full h-full object-cover rounded-lg' alt="" />
      </div>
      <div className='w-[585px] h-[400px] rounded-md flex flex-col space-y-5 items-start justify-start pl-2 pr-3'>
        {/* logo and make meal title  */}
        <div className='flex justify-center items-center'>
          <img src={logo.src} className='w-[50px] h-[50px]' alt="MM" />
          <span>by Make Meal</span>
        </div>
        {/* title  */}
        <div>
          <span className='text-2xl font-semibold'>{name}</span>
        </div>
        {/* description  */}
        <div className='text-justify'>
          <span className='text-lg font-thin text-gray-600'>{description}</span>
        </div>
        {/* price and add button   */}
        <div className='w-full p-1 flex justify-between items-center'>
          <span className='text-xl font-semibold'>Rs.{price}</span>
          <Button variant='outline' className='w-[150px] h-[45px] text-white bg-[rgb(189,162,110)] text-[1.2rem] pl-4 pr-4 pb-2 pt-2' onClick={addToCart} >{adding}</Button>
        </div>
      </div>
    </div>
  )
}

export default SingleProductData
