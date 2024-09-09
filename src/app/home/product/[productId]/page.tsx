'use client'

import SingleProductData from '@/components/subComponent/SingleProductData'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '@/components/Loader'

export interface Product {
  productId: string;
  restaurantId: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  preparationTime: string;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  discount: number;
  ingredient: string;
  calories: string;
  availability: boolean
}

function Page({params}: {params: {productId: string}}) {

  const [data, setData] = useState<null | Product>(null)

  const {productId} = params

  console.log(productId)

  async function handleSingleProductDataFetching() {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/product/singleProduct`, {productId})

      console.log(response)

      setData(response.data.response)

    } catch (error) {
      console.log(error)
    }
  }  

  useEffect(() => {
    handleSingleProductDataFetching()
  }, [])
  return (
    <div className='w-full flex justify-center items-center flex-col'>
      {
        data === null ? (<Loader></Loader>) : (
          <SingleProductData
          productId={data.productId}
          name={data.name}
          description={data.description}
          price={data.price}
          imageUrl={data.imageUrl}
          availability={data.availability}
          ></SingleProductData>
        )
      }
    </div>
  )
}

export default Page
