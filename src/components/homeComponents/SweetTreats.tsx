'use client'
import React, { useEffect, useState } from 'react'
import { Product } from '@/app/home/product/[productId]/page'
import { categoryWiseDataFetching } from '@/utils/categoryWiseDataFetch'
import Loader from '@/components/Loader'
import ProductCard from '@/components/subComponent/ProductCard'

function SweetTreats() {

    const [data, setData] = useState<null | Product[]>(null)


    async function fetchData() {

        const category = 'sweet'
        const response: any = await categoryWiseDataFetching(category)

        setData(response.data.response)
        console.log(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='w-full flex flex-col items-center justify-center border-b'>
            <div className='w-full pt-4 pb-2 flex justify-center items-center'>
                <span className='text-3xl font-semibold'>Sweet Treats</span>
            </div>
            {
                data === null ? (<Loader></Loader>) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 mg:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'>
                        {data.map((product: any) => (
                            <ProductCard
                                key={product.productId}
                                productId={product.productId}
                                name={product.name}
                                description={product.description}
                                imageUrl={product.imageUrl}
                                price={product.price}
                                availability={product.availability}
                            ></ProductCard>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default SweetTreats
