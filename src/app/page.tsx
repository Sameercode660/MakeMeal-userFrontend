'use client'

import SignUp from "@/components/SignUp";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/home');
    } else {
      router.push('/auth/signup');
    }
  }, [router]); // Make sure to include `router` in the dependency array

  return (
    <div>Loading...</div>
  );
}
