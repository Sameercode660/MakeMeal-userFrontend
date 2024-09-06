import React from 'react'
import HomeLoading from '@/app/assets/HomeLoading.gif'
import MakeMeal from '@/app/assets/MakeMeal.png'

function HomeLoader() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <img src={HomeLoading.src} alt="Loading...." />
    </div>
  )
}

export default HomeLoader
