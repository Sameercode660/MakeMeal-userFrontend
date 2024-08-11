'use client'

import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function SignUp() {


    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [phoneNumber, setPhoneNumber] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    // error incator states
    const [errorName, setErrorName] = useState<boolean>(false)
    const [errorEmail, setErrorEmail] = useState<boolean>(false)
    const [errorPhoneNumber, setErrorPhoneNumber] = useState<boolean>(false)
    const [errorPassword, setErrorPassword] = useState<boolean>(false)

    const errorStateArray = [setErrorName, setErrorEmail, setErrorPhoneNumber, setErrorPassword]

    const router = useRouter()

    async function handleUserSignUp() {
        try {
            errorStateArray.forEach((fn) => {
                fn(false)
            })
            
            // checking input is not empty
            if(!name) {
                setErrorName(true)
                return
            }
    
            if(!email) {
                setErrorEmail(true)
                return
            }
    
            if(!password) {
                setErrorPassword(true)
                return
            }
    
            if(!phoneNumber) {
                setErrorPhoneNumber(true)
                return
            }
    
            const data = {
                name, 
                email,
                phoneNumber,
                password
            }
    
            console.log(process.env.NEXT_PUBLIC_HOST)
    
            const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/auth/user/signup`, data)
            
            console.log(response)

            localStorage.setItem('token', response.data.token)
            localStorage.setItem('id', response.data.response.id)

            router.push('/home')
        } catch (error) {
            console.log(error)
        }    
    
    }

    return (
        <div className='w-full h-screen flex justify-center items-center '>
            <div className='flex flex-col space-y-5 border p-5 rounded-md'>
                <div className='text-center'>
                    <h1 className='text-4xl font-semibold text-teal-400 '>MakeMeal</h1>
                    <span className='text-[12px]'>Aleady a user? <Link href='/auth/login' className='underline text-blue-500'>Login</Link></span>
                </div>
                <div className='text-center'>
                    <span className='text-xl font-semibold text-blue-300'>SignUp</span>
                </div>
                <div>
                    <Input placeholder='Name'
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                        className={`${errorName ? 'border border-red-600': ''}`}
                    ></Input>
                </div>
                <div>
                    <Input placeholder='email'
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        className={`${errorEmail ? 'border border-red-600': ''}`}
                    ></Input>
                </div>
                <div>
                    <Input placeholder='Phone Number'
                        onChange={(e) => {
                            setPhoneNumber(e.target.value)
                        }}
                        className={`${errorPhoneNumber ? 'border border-red-600': ''}`}
                    ></Input>
                </div>
                <div>
                    <Input placeholder='password' type='password'
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        className={`${errorPassword ? 'border border-red-600': ''}`}
                    ></Input>
                </div>
                <div className='text-center'>
                    <Button variant={'outline'} onClick={handleUserSignUp}>SignUp</Button>
                </div>
            </div>
        </div>
    )
}

export default SignUp
