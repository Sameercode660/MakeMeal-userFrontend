'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { handleItemsToCart } from '@/utils/addItemsToCart'
import axios from 'axios'
import Loader from '../Loader'

interface PropTypes {
    id: string,
    productId: string,
    userId: string,
    imageUrl: string,
    title: string,
    description: string,
    amount: number,
    quantity: number,
    fetchCartProduct: () => Promise<void>
}

function Cart({ id, userId, imageUrl, title, description, amount, quantity, productId, fetchCartProduct }: PropTypes) {

    const [loading, setLoading] = useState<boolean>(false)
    const [removeLoading, setRemoveLoading] = useState<boolean>(false)


    async function removeItemFromCart() {
        try {
            
            setRemoveLoading(true)
            const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/product/cart/removeProduct`, {cartId: id})
                        
            await fetchCartProduct()

            setRemoveLoading(false)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='w-full h-auto flex flex-col justify-center items-center md:flex-col lg:flex-row p-5 border-b border-gray-500 '>
            <div className='w-[300px] h-[150px]'>
                <img src={imageUrl} className='w-full h-full object-cover rounded-lg' alt="" />
            </div>
            <div className='pl-5'>
                <div>
                    <span className='text-[1rem] sm:text-[1.1rem] md:text-[1.2] font-semibold'>{title}</span>
                </div>
                <div className='text-justify '>
                    <span className='text-[0.8rem]'>{description}</span>
                </div>
                <div className='w-full flex justify-between items-center p-3'>
                    <div>
                        <span className='font-semibold text-[1.2rem]'>Rs.{amount}</span>
                    </div>
                    <div>
                        <Button variant='outline' onClick={async () => {
                            await removeItemFromCart()
                        }}>{removeLoading ? 'Removing..' : 'Remove'}</Button>
                    </div>
                    <div className='border w-[100px] h-[30px] grid grid-cols-3'>
                        <button  className={`${quantity === 1 ?'cursor-not-allowed': ''} bg-yellow-200`} 
                            onClick={async() => {
                                setLoading(true)
                                await handleItemsToCart({ productId, userId, quantity: -1 })
                                await fetchCartProduct()
                                setLoading(false)
                            }}
                        >-</button>
                        <span className='text-center'>{loading ? <Loader></Loader> : quantity}</span>
                        <button className='bg-yellow-200'
                            onClick={async() => {
                                setLoading(true)
                                await handleItemsToCart({ productId, userId, quantity: 1 })
                                await fetchCartProduct()
                                setLoading(false)
                            }}
                        >+</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cart
