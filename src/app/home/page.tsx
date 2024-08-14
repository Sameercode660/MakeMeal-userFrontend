import ProtectedRoute from '@/components/ProtectedRoute'
import React from 'react'
import HomeComponent from '@/components/HomeComponent'

function page() {
  return (
    <ProtectedRoute>
      <HomeComponent></HomeComponent>
    </ProtectedRoute>
  )
}

export default page
