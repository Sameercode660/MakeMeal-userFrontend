'use client'

import SignUp from "@/components/SignUp";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from 'recoil'
import { validationAtom } from "@/recoil/RecoilUserState";
import HomeLoader from "@/components/homeComponents/HomeLoader";

export default function Home() {

  const router = useRouter();
  const [login, setLogin] = useRecoilState(validationAtom)

  async function loginWithToken() {
    try {
      const data = {
        token: localStorage.getItem('token')
      }

      const response = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/auth/user/token-login`, data)

      console.log(response)

      setLogin(true)

      router.push('/home');
    } catch (error) {
      console.log(error)
    }


  }
  useEffect(() => {
    if (localStorage.getItem('token')) {
      loginWithToken()
    } else {
      router.push('/auth/signup');
    }
  }, [router]); // including `router` in the dependency array

  return (
    <>
      <HomeLoader></HomeLoader>
    </>
  );
}
