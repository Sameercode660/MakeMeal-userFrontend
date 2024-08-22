import React from 'react'
import Loader from '@/app/assets/cloading.gif'

interface PropTypes {
    width: number,
    hight: number
}

function Cloading({width, hight}: PropTypes) {
  return (
    <div className=''>
      <img src={Loader.src} alt="Loading..."  width={width} height={hight}/>
    </div>
  )
}



export default Cloading
