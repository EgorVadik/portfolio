'use client'

import { isHoveredAtom, mousePositionAtom, textAtom } from '@/lib/atoms'
import { cn } from '@/lib/utils'
import { useAtomValue } from 'jotai'
import React, { useEffect } from 'react'

export const HoverCircle = () => {
    const mousePosition = useAtomValue(mousePositionAtom)
    const isHovered = useAtomValue(isHoveredAtom)
    const text = useAtomValue(textAtom)

    useEffect(() => {
        if (isHovered) {
            document.body.style.cursor = 'none'
        } else {
            document.body.style.cursor = ''
        }

        return () => {
            document.body.style.cursor = ''
        }
    }, [isHovered])

    return (
        <div
            className={cn(
                'pointer-events-none fixed z-50 flex cursor-not-allowed items-center justify-center rounded-full bg-primary font-bold text-primary-foreground',
                text !== 'sm' ? 'size-24' : 'size-16 text-xs',
            )}
            style={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0,
                top: mousePosition.y,
                left: mousePosition.x,
                transform: `translate(-50%, -50%)`,
                transition: 'scale 0.3s, transform 0.3s, opacity 0.3s',
                transformOrigin: '0 0',
            }}
        >
            Drag me
        </div>
    )
}
