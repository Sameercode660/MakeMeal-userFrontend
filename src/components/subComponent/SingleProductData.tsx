import React from 'react'
import logo from '@/app/assets/MakeMeal.png'
import { Button } from '../ui/button'


function SingleProductData() {
  return (
    <div className='w-full flex justify-center items-center'>
      {/* image container  */}
      <div className='w-[585px] h-[400px] m-1'>
        <img src="https://rp-media.faasos.io/catalog/images/N2BJGMDDQQ.jpeg" className='w-full h-full object-cover rounded-lg' alt="" />
      </div>
      <div className='w-[585px] h-[400px] m-1 border flex flex-col space-y-5 items-start p-5'>
            {/* logo and make meal title  */}
            <div className='flex justify-center items-center'>
                <img src={logo.src} className='w-[50px] h-[50px]' alt="MM" />
                <span>Make Meal</span>
            </div>
            {/* title  */}
            <div>
                <span>Murgh Tikka Biryani (Chicken Tikka Dum Biryani - Serves 1)</span>
            </div>
            {/* description  */}
            <div className=''>
                <span>(Boneless, Served with 1 Gulab Jamun & Mint Raita) A potpourri of extravagant flavours, tender chicken spiced with freshly ground Behrouz masala is charcoal-grilled then layered with fragrant basmati & dum-pukht in its full glory</span>
            </div>
             {/* price and add button   */}
            <div>
                <span>Rs.200</span>
                <Button variant='outline'>Add</Button>
            </div>
      </div>
    </div>
  )
}

export default SingleProductData
