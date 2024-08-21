import ProtectedRoute from '@/components/ProtectedRoute'
import React from 'react'
import HomeComponent from '@/components/HomeComponent'
import Exclusive from '@/components/homeComponents/Exclusive'
import AllCategory from '@/components/homeComponents/AllCategory'
import ShahiBiryani from '@/components/homeComponents/ShahiBiryani'
import DastaneKabab from '@/components/homeComponents/DastaneKabab'
import DessertsAndBeverages from '@/components/homeComponents/DessertsAndBeverages'
import NewlyLaunched from '@/components/homeComponents/NewlyLaunched'
import Footer from '@/components/homeComponents/Footer'
import Beverages from '@/components/homeComponents/Beverages'
import SweetTreats from '@/components/homeComponents/SweetTreats'

function page() {
  return (
    // <ProtectedRoute>
    // </ProtectedRoute>
    <div className='w-full'>
      <HomeComponent></HomeComponent>
      <Exclusive></Exclusive>
      <AllCategory></AllCategory>
      <ShahiBiryani></ShahiBiryani>
      <DastaneKabab></DastaneKabab>
      <DessertsAndBeverages></DessertsAndBeverages>
      <Beverages></Beverages>
      <SweetTreats></SweetTreats>
      <NewlyLaunched></NewlyLaunched>
    </div>
  )
}

export default page
