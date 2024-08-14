'use client'

import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { validationAtom } from '@/recoil/RecoilUserState'
import { useRouter } from 'next/navigation'


function ProtectedRoute({children} : {children: React.ReactNode}) {
 
  const [login, setLogin] = useRecoilState(validationAtom)
  const router = useRouter()

  useEffect(() => {
    if(!login) {
        router.push('/auth/signup')
    }
  }, [login, setLogin])

  return (
    <>
      {children}
    </>
  )
}

export default ProtectedRoute
