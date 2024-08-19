import Link from 'next/link'
import React from 'react'


interface dataType {
    name: string
    imageUrl: string
    category: string
  }
  


function CategoryCard({name, imageUrl, category}: dataType) {
  return (
    <Link href={`/home/categoryProduct/${category}`} className='m-2 border rounded-md' >
      <div className='w-[250px] h-[200px]'>
        <img src={imageUrl} alt="" className='w-full h-full object-cover rounded-md'/>
      </div>
      <div className='w-full h-full flex justify-center items-center pt-4 pb-4'>
        <span>{name}</span>
      </div>
    </Link>
  )
}

export default CategoryCard
