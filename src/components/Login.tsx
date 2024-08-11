'use client'

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import axios from 'axios'
import Link from 'next/link'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'



function Login() {


    const [loading, setLoading] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    // error incator states
    const [errorEmail, setErrorEmail] = useState<boolean>(false)
    const [errorPassword, setErrorPassword] = useState<boolean>(false)

    const router = useRouter()

    const errorStateArray = [setErrorEmail, setErrorPassword]

    async function handleUserLogin() {
        try {
            setLoading(true)

            errorStateArray.forEach((fn) => fn(false))

            if (!email) {
                setErrorEmail(true)
                return
            }

            if (!password) {
                setErrorPassword(true)
                return
            }

            const data = {
                email,
                password
            }

            const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/auth/user/signin`, data)

            console.log(response)

            localStorage.setItem('id', response.data.response.id)
            localStorage.setItem('token', response.data.token)

            setLoading(false)

            router.push('/home')

        } catch (error) {
            console.log(error)
            alert('Unable to Login')
        }
    }
    return (
        <div className='w-full h-screen flex justify-center items-center '>
            <div className='flex flex-col space-y-5 border p-5 rounded-md'>
                <div className='text-center'>
                    <h1 className='text-4xl font-semibold text-teal-400 '>MakeMeal</h1>
                    <span className='text-[12px]'>Create new account? <Link href='/auth/signup' className='underline text-blue-500'>Signup</Link></span>
                </div>
                <div className='text-center'>
                    <span className='text-xl font-semibold text-blue-300'>LogIn</span>
                </div>
                <div>
                    <Input placeholder='email'
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        className={`${errorEmail ? 'border border-red-600' : ''}`}
                    ></Input>
                </div>
                <div>
                    <Input placeholder='password' type='password'
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        className={`${errorPassword ? 'border border-red-600' : ''}`}
                    ></Input>
                </div>
                <div className='text-center'>
                    <Button variant={'outline'} onClick={handleUserLogin} disabled={loading ? true : false} >{loading ? 'Please wait..' : 'Login'}</Button>
                </div>
            </div>
        </div>
    )
}

export default Login
