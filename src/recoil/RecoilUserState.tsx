'use client'

import { RecoilRoot, atom } from "recoil"


export default function RecoilRootProvider({children}: {children: React.ReactNode}) {
    return (
        <RecoilRoot> { children }</RecoilRoot>
    )
}