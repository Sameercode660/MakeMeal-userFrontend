'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Product } from '../../product/[productId]/page'
import { categoryWiseDataFetching } from '@/utils/categoryWiseDataFetch'
import Loader from '@/components/Loader'
import ProductCard from '@/components/subComponent/ProductCard'

function page({ params }: { params: { category: string } }) {

  const [data, setData] = useState<null | Product[]>(null)

  const { category } = params

  async function fetchData() {

    const response: any = await categoryWiseDataFetching(category)

    setData(response.data.response)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className='w-full h-full flex flex-col justify-center items-center flex-wrap'>
      <div className='w-full flex justify-center items-center pt-4 pb-3'>
        <span className='text-3xl font-thin'>{category.toUpperCase()} &#40;{data === null ? '0' : data.length}&#41;</span>
      </div>
      {
        data === null ? (<Loader></Loader>) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
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

export default page
