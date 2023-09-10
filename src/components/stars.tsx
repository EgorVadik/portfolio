import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.cjs'

const Stars = () => {
    const ref = useRef<any>()
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(10000), { radius: 1.5 })
    ) as Float32Array[]

    useFrame((_, delta) => {
        ref.current.rotation.x -= delta / 40
        ref.current.rotation.y -= delta / 40
    })

    return (
        <group rotation={[0, 0, Math.PI / 2]}>
            <Points ref={ref} positions={sphere} stride={3}>
                <PointMaterial
                    transparent
                    color='#'
                    size={0.0015}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

export const StarsCanvas = () => {
    return (
        <div className='w-full h-auto absolute inset-0'>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
                <Preload all />
            </Canvas>
        </div>
    )
}
