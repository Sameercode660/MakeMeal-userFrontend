'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { handleItemsToCart } from '@/utils/addItemsToCart'

interface propsType {
    productId: string
    name: string
    description: string
    imageUrl: string
    price: string
}

function ProductCard({productId, name, description, imageUrl, price}: propsType) {

    const [adding, setAdding] = useState<string>('Add')

    async function addToCart(e: React.MouseEvent<HTMLButtonElement>) {

        e.preventDefault()
        e.stopPropagation()
        setAdding('Adding')
        const userId = localStorage.getItem('id')
        const quantity = 1
        const response = await handleItemsToCart({productId, userId, quantity})
        setAdding('Added')
        const timeout = setTimeout(() => {
            setAdding('add')
            clearTimeout(timeout)
        }, 2000)
    }

    return (
        <Link href={`/home/product/${productId}`} className='w-[18rem] border flex space-y-3 flex-col rounded-md m-2 transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg'>
            <div className='w-full h-[200px]'>
                <img className='rounded-lg object-cover w-full h-full' src={imageUrl} alt="" />
            </div>
            <div className='pr-3 pl-3'>
                <span className='font-bold text-xl'>{name.length > 15 ? name.slice(0, 15) + '...' : name}</span>
            </div>
            <div className=''>
                <span className='text-[15px] text-gray-500'>
                    {description.length >80 ? description.slice(0, 80) + '...' : description}
                </span>
            </div>
            <div className='flex justify-between p-3'>
                <div>
                    <span className='text-[20px] font-bold text-black'>
                    Rs.{price}
                    </span>
                </div>
                <div>
                    <Button variant='outline' onClick={addToCart}>{adding}</Button>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
