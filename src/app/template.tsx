import { HoverCircle } from '@/components/hover-circle'
import React from 'react'

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <HoverCircle />
        </>
    )
}
