import React from 'react'
import NavigationMenu from '@/components/NavigationMenu'

export function layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <NavigationMenu></NavigationMenu>
      {children}
    </>
  )
}

export default layout
