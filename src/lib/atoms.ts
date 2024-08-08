import { atom } from 'jotai'

export const mousePositionAtom = atom({ x: 0, y: 0 })
export const isHoveredAtom = atom(false)
export const textAtom = atom('')