'use client'

import { RecoilRoot, atom } from "recoil"

export const validationAtom = atom({
    key: 'validationAtom',
    default: false
})


export default function RecoilRootProvider({children}: {children: React.ReactNode}) {
    return (
        <RecoilRoot> { children }</RecoilRoot>
    )
}