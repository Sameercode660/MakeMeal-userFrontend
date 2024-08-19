import React from 'react'
import NavigationMenu from '@/components/NavigationMenu'
import Footer from '@/components/homeComponents/Footer'

export function layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <NavigationMenu></NavigationMenu>
      {children}
      <Footer></Footer>
    </>
  )
}

export default layout
