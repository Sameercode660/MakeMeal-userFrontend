import React from 'react'
import CategoryCard from './CategoryCard'

interface dataType {
  name: string
  imageUrl: string,
  category: string
}


const data: dataType[] = [
  {
    name: 'Recommended',
    imageUrl: 'https://rp-media.faasos.io/catalog/images/LEXODJVDS2.jpeg',
    category: 'recommended'
  },
  {
    name: 'Veg Special',
    imageUrl: 'https://rp-media.faasos.io/catalog/images/TQGYABRICS.jpeg',
    category: 'veg'
  },
  {
    name: 'Non-Veg Special',
    imageUrl: 'https://rp-media.faasos.io/catalog/images/VSTLNI84YD23.jpeg',
    category: 'non-veg'
  },
  {
    name: 'Navabi Mehfil',
    imageUrl: 'https://rp-media.faasos.io/catalog/images/HRLUKFIT7LHA.jpeg',
    category: 'navabi'
  },
  
]

function AllCategory() {
  return (
    <div className='w-full border-b'>
      <div className='w-full pt-4 pb-2 flex justify-center items-center'>
        <span className='text-3xl font-semibold'>All Categories</span>
      </div>
      <div className='flex justify-center items-center p-5 flex-wrap'>
        {
          data.map((product) => (
            <CategoryCard
            key={product.name}
            name={product.name}
            imageUrl={product.imageUrl}
            category={product.category}
            ></CategoryCard>
          ))
        }
      </div>
    </div>
  )
}

export default AllCategory
