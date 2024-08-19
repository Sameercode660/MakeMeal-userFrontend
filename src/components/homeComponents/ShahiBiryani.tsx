'use client'
import React, { useEffect, useState } from 'react'
import { Product } from '@/app/home/product/[productId]/page'
import { categoryWiseDataFetching } from '@/utils/categoryWiseDataFetch'
import Loader from '@/components/Loader'
import ProductCard from '@/components/subComponent/ProductCard'

function ShahiBiryani() {

  const [data, setData] = useState<null | Product[]>(null)


  async function fetchData() {

    const category = 'shahi'
    const response: any = await categoryWiseDataFetching(category)

    setData(response.data.response)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='w-full flex flex-col items-center justify-center '>
      <div className='w-full pt-4 pb-2 flex justify-center items-center'>
        <span className='text-3xl font-semibold'>All Categories</span>
      </div>
      {
        data === null ? (<Loader></Loader>) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {data.map((product: any) => (
              <ProductCard
                key={product.productId}
                productId={product.productId}
                name={product.name}
                description={product.description}
                imageUrl={product.imageUrl}
                price={product.price}
              ></ProductCard>
            ))}
          </div>
        )
      }
    </div>
  )
}

export default ShahiBiryani
