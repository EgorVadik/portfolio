'use client'

import { Suspense } from 'react'
import { Html, Loader, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useMediaQuery } from '@mantine/hooks'

type GLTFResult = GLTF & {
    nodes: {
        Object_4: THREE.Mesh
        Object_6: THREE.Mesh
    }
    materials: {
        Clouds: THREE.MeshBasicMaterial
        Planet: THREE.MeshBasicMaterial
    }
}

export function Model(props: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>(null)
    const { nodes, materials } = useGLTF('/stylized_planet.glb') as GLTFResult

    return (
        <group ref={group} {...props} dispose={null}>
            <group name='Sketchfab_Scene'>
                <group name='Sketchfab_model' rotation={[-1.54, -0.064, 0]}>
                    <group name='root'>
                        <group
                            name='GLTF_SceneRootNode'
                            rotation={[Math.PI / 2, 0, 0]}
                        >
                            <group name='Clouds_1'>
                                <mesh
                                    name='Object_4'
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_4.geometry}
                                    material={materials.Clouds}
                                />
                            </group>
                            <group name='Planet_2'>
                                <mesh
                                    name='Object_6'
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Object_6.geometry}
                                    material={materials.Planet}
                                />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/stylized_planet.glb')

export const RenderModel = () => {
    const matches = useMediaQuery('(max-width: 768px)')

    return (
        <Canvas id='earth-canvas'>
            <ambientLight intensity={2} />
            <spotLight position={[10, 10, 10]} penumbra={1} />
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                enableRotate
                autoRotate
                rotateSpeed={0.5}
                autoRotateSpeed={0.5}
            />
            <Suspense
                fallback={
                    <Html>
                        <Loader />
                    </Html>
                }
            >
                <Model
                    scale={matches ? [3, 3, 3] : [3.5, 3.5, 3.5]}
                    position={[0, 0, 0]}
                    rotation={[0, Math.PI, 0]}
                />
            </Suspense>
        </Canvas>
    )
}
