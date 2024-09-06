'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

function PlacedOrderList({id, orderNumer, items, status, amount }: any) {

    const router = useRouter()

    return (
        <>
            <div className='w-full sm:w-[70%] md:w-1/2 border bg-gray-200 m-2 max-sm:m-5 rounded-md p-2 flex flex-col space-y-5'>
            <div>
                <span className='text-xl font-semibold'>Your Order Number: {orderNumer}</span>
            </div>
            <div>
                <span className='text-base font-semibold'>Orders in your Order</span>
                <div className='ml-3'>
                    {
                        items.map((item: any) =>
                        (
                            <div key={item.productId} className='full border border-red-500 flex justify-between'>
                                <span className='border-b'>{item.name}</span>
                                <span>Qty. {item.quantity}</span>
                                <span>Amt. {item.price}</span>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
            <div>
                <span>Order Status: {status}</span>
            </div>
            <div>
                <span>Total Amount: {amount}</span>
            </div>
            {
                status === 'served' ? (<div>
                    <Button variant={'outline'} onClick={() => {
                        router.push(`/home/complaint/${id}`)
                    }}>Feedback</Button>
                </div>) : ('')
            }
        </div>
        </>
    )
}

export default PlacedOrderList
