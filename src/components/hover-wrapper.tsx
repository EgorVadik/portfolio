import { isHoveredAtom, mousePositionAtom, textAtom } from '@/lib/atoms'
import { useSetAtom } from 'jotai'
import React, { useRef, useEffect } from 'react'

type HoverWrapperProps = {
    children: React.ReactElement
    text: string
}

export const HoverWrapper = ({ children, text }: HoverWrapperProps) => {
    const setIsHovered = useSetAtom(isHoveredAtom)
    const setMousePosition = useSetAtom(mousePositionAtom)
    const setText = useSetAtom(textAtom)
    const childRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const onMouseEnter = () => {
            setIsHovered(true)
            setText(text)
        }

        const onMouseLeave = () => {
            setIsHovered(false)
        }

        const onMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        const node = childRef.current
        if (node) {
            node.addEventListener('mouseenter', onMouseEnter)
            node.addEventListener('mouseleave', onMouseLeave)
            node.addEventListener('mousemove', onMouseMove)
        }
        return () => {
            if (node) {
                setIsHovered(false)
                node.removeEventListener('mouseenter', onMouseEnter)
                node.removeEventListener('mouseleave', onMouseLeave)
                node.removeEventListener('mousemove', onMouseMove)
            }
        }
    }, [setIsHovered, setMousePosition, setText, text])

    return React.cloneElement(children, { ref: childRef })
}
