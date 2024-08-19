'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '@/app/assets/loading.gif'
import ProductCard from '../subComponent/ProductCard'

function Exclusive() {


  const [data, setData] = useState([])

  async function handleFetchExclusiveProduct() {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/product/exclusiveProduct`, { category: 'exclusive' })

      console.log(response)
      setData(response.data.response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleFetchExclusiveProduct()
  }, [])
  return (
    <div className='w-full flex justify-center items-center flex-wrap overflow-auto flex-col'>
      <div className='flex justify-center items-center pt-3 pb-3 font-bold'>
        <span className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Exclusively on Make Meal</span>
      </div>
      <div className='w-full flex justify-center items-center flex-wrap'>
        {
          data.length == 0 ? (<img src={Loader.src} alt="loader" />) : (
            data.map((product: any) => (
              <ProductCard
                key={product.productId}
                productId={product.productId}
                name={product.name}
                description={product.description}
                imageUrl={product.imageUrl}
                price={product.price}
              ></ProductCard>
            ))
          )
        }
      </div>

    </div>
  )
}

export default Exclusive
