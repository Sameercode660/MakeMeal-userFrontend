'use client'


import Loader from '@/components/Loader'
import Cart from '@/components/subComponent/Cart'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cloading from '@/components/Cloading'
import { pusher } from '@/utils/pusher'


interface itemsTypes {
    productId: string,
    name: string,
    quantity: number,
    price: number
}

function page() {

    const [data, setData] = useState([])
    const [subTotal, setSubTotal] = useState(null)
    const [name, setName] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)
    const [clearCartLoading, setClearCartLoading] = useState<boolean>(false)
    const [items, setItems] = useState<itemsTypes>([])



    async function placeOrder() {
        try {
            const orderItems: ItemsTypes[] = data.map((item: any) => ({
                productId: item.productId,
                name: item.product.name,
                quantity: item.quantity,
                price: item.product.price * item.quantity,
            }));

            const orderData = {
                userId: data[0].userId,
                items: orderItems,
                totalPrice: subTotal || 0,
            };

            const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/order/placeOrder`, orderData)

            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    async function fetchCartProduct() {
        try {

            const userId = localStorage.getItem('id')

            const data = {
                userId
            }

            const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/product/cart/fetchCart`, { data })

            console.log(response)
            setData(response.data.response)
            setSubTotal(response.data.subTotal)
            setName(response.data.response[0].user.name)
            setPhoneNumber(response.data.response[0].user.phoneNumber)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    async function clearCart() {
        try {

            setClearCartLoading(true)
            const userId = localStorage.getItem('id')

            const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/product/cart/clearCart`, { userId })

            console.log(response)

            await fetchCartProduct()

            setClearCartLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        const channel = pusher.subscribe('user-orders-123');

        // Bind the event to handle new orders
        channel.bind('order-confirmed', function (data: any) {
            console.log('New order received:', data);
            // Update OMS UI here
        });

        fetchCartProduct()

        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, [])

    if (loading) {
        return <div className='w-full h-screen flex justify-center items-center text-center'>
            <Loader></Loader>
        </div>
    }

    if (data.length === 0) {
        return <div className='w-full h-screen flex justify-center items-center text-center'> Cart is empty</div>
    }

    return (
        <div className='w-full flex flex-col items-center mb-5'>
            <div className='w-full sm:w-1/2 border m-1 p-6 shadow-lg rounded-lg text-center'>
                <div>
                    <span className='text-[1.8rem]'>Welcome, {name}</span>
                </div>
                <div>
                    <span>{name}</span>
                </div>
                <div>
                    <span>+91{phoneNumber}</span>
                </div>
            </div>
            <div className='w-full sm:w-1/2'>
                <div className='w-full p-6 border shadow-lg text-center rounded-md'>
                    <span className='text-lg font-semibold'>
                        Cart Summary
                    </span>
                </div>
                <div className='w-full h-full overflow-hidden'>
                    {
                        data.map((product: any) => (
                            <Cart
                                key={product.id}
                                id={product.id}
                                productId={product.productId}
                                userId={product.userId}
                                imageUrl={product.product.imageUrl}
                                title={product.product.name}
                                description={product.product.description}
                                amount={product.amount}
                                quantity={product.quantity}
                                fetchCartProduct={fetchCartProduct}
                            ></Cart>
                        ))
                    }
                </div>
                <div className='w-full p-6 border shadow-lg text-center flex justify-between items-center rounded-md'>
                    <div>
                        <Button variant="outline" onClick={async () => {
                            await clearCart()
                        }}>{clearCartLoading ? <Cloading width={50} hight={50}></Cloading> : 'Clear Cart'}</Button>
                    </div>
                    <div>
                        <span>Total: {subTotal}</span>
                    </div>
                    <div>
                        <Button variant="outline" onClick={placeOrder}>Place order</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
