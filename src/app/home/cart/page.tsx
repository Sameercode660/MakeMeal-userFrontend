import Cart from '@/components/subComponent/Cart'
import { Button } from '@/components/ui/button'
import React from 'react'

function page() {
    return (
        <div className='w-full h-screen flex flex-col items-center'>
            <div className='w-full sm:w-1/2 border m-1 p-6 shadow-lg rounded-lg text-center'>
                <div>
                    <span className='text-[1.8rem]'>Welcome, Sameer</span>
                </div>
                <div>
                    <span>Mohd Sameer</span>
                </div>
                <div>
                    <span>+916394867435</span>
                </div>
            </div>
            <div className='w-full sm:w-1/2'>
                <div className='w-full p-6 border shadow-lg text-center rounded-md'>
                    <span className='text-lg font-semibold'>
                        Cart Summary
                    </span>
                </div>
                <Cart></Cart>
                <div className='w-full p-6 border shadow-lg text-center flex justify-between items-center rounded-md'>
                    <div>
                        <Button variant="outline">Clear Cart</Button>
                    </div>
                    <div>
                        <span>Total: Rs1234</span>
                    </div>
                    <div>
                        <Button variant="outline">Place order</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
