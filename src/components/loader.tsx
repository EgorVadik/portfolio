import { useProgress } from '@react-three/drei'
import React from 'react'

export const Loader = () => {
    const progressData = useProgress()

    return (
        <div className='text-center text-lg'>
            <span>Loading {progressData.progress}%</span>
        </div>
    )
}
