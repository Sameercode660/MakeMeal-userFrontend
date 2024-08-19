import SingleProductData from '@/components/subComponent/SingleProductData'
import React from 'react'

function page({params}: {params: {productId: string}}) {

  const {productId} = params
  return (
    <div>
      <SingleProductData></SingleProductData>
    </div>
  )
}

export default page
