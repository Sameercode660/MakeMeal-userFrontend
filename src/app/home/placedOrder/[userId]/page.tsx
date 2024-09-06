'use client'

import PlacedOrderList from '@/components/orderComponent/PlacedOrderList'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cloading from '@/components/Cloading'
import Loader from '@/components/Loader'

function page({params}: {params: {userId: string}}) {


    // const {userId} = params

  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<any>([])


  async function fetchOrderDetails() {
    try {
        const userId = localStorage.getItem('id')

        const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/order/customerOrder`, {userId: userId})
        
        setData(response.data.response)
        setLoading(false)

        console.log(response)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    fetchOrderDetails()
  }, [])

  return (
    <div className='w-full flex flex-col justify-center items-center m-1'>
        {
            loading === true ? (
                <div>
                    <Loader></Loader>
                </div>
            ): (
                data.map((value: any) => (
                    <PlacedOrderList
                    id={value.id}
                    key={value.id}
                    orderNumer={value.orderNumber}
                    items={value.items}
                    status={value.status}
                    amount={value.totalPrice}
                    ></PlacedOrderList>
                ))
            )
        }
    </div>
  )
}

export default page
