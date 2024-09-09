'use client'

import Complaint from '@/components/Complaint'
import React, { useState } from 'react'
import Logo from '@/app/assets/MakeMeal.png'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Cloading from '@/components/Cloading'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { BiCool } from "react-icons/bi";

function Page({ params }: { params: { id: string } }) {

  const { id } = params;
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [pop, setPop] = useState<boolean>(false)
  const router = useRouter()

  async function handleComplaint() {
    try {
      setLoading(true)

      const data = {
        orderId: id,
        userId: localStorage.getItem('id'),
        title,
        description,
        category
      }

      const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/order/customer-complaint`, data)

      setLoading(false)

      console.log(response)

      setPop(true)

      const timeout = setTimeout(() => {
        setPop(false)
        router.push(`/home/placedOrder/${localStorage.getItem('id')}`)
        clearTimeout(timeout)
      }, 1000)


    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center'>
      <div className='w-full sm:w-1/2 h-full border-gray-300 border flex flex-col justify-center items-center gap-5'>
        <div>
          <span className='text-base sm:text-xl font-semibold'>Share your feedback</span>
        </div>
        <div>
          <img src={Logo.src} width={70} height={70} alt="MM" />
          <div>
            <span className='text-base sm:text-lg font-semibold'>Make Meal</span>
          </div>
        </div>
        <div className='w-full p-2'>
          <span>
            <Input placeholder='Write your issue in brief' className='' value={title} onChange={(e) => {
              setTitle(e.target.value)
            }}></Input>
          </span>
        </div>
        <div className='w-full p-2'>
          <span className='w-full'>
            <textarea placeholder='Describe your issue' className='border w-full rounded p-1' value={description} rows={8} onChange={(e) => {
              setDescription(e.target.value)
            }} ></textarea>
          </span>
        </div>
        <div className='w-full p-1'>
          <span className='w-full'>
            <select name="" id="" className='w-full border p-2' value={category} onChange={(e) => {
              setCategory(e.target.value)
            }}>
              <option value="unknown">Select a type</option>
              <option value="quality">Quality Issue</option>
              <option value="behaviour">Behaviour Issue</option>
              <option value="delay">Late order</option>
              <option value="missing">Missing Item</option>
              <option value="wrong-order">Wrong Order</option>
            </select>
          </span>
        </div>
        <div className='flex'>
          <div>
            <span>
              <Button variant={'outline'} className='w-[80px] m-1 bg-green-300'>Back</Button>
            </span>
          </div>
          <div>
            <span>
              <Button variant={'outline'} className='w-[80px] m-1 bg-orange-300' onClick={handleComplaint}>{loading ? <Cloading width={40} hight={40} /> : "Submit"}</Button>
            </span>
          </div>
        </div>
      </div>
    </div>
    {
      pop ? (

        <div className='w-full h-screen bg-[rgba(0,0,0,0.1)] fixed z-50 top-0 flex justify-center items-center transition-all duration-200 ease-in-out'>
          <div className='w-[300px] h-[200px] bg-white rounded-md flex justify-center items-center gap-2'>
            <div>
              <span>
              <BiCool className='text-4xl'/>
              </span>
            </div>
            <div>
              <span className='text-lg font-semibold text-green-500'>Submitted Successfully</span>
            </div>
          </div>
        </div>
      ) : ('')
    }
    </>
  )
}

export default Page
