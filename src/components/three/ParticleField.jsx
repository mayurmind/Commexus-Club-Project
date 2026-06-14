import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function ParticleField({ count = 200, scrollProgress = 0 }) {
  const meshRef = useRef()
  const timeRef = useRef(0)

  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const speeds = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
      speeds[i] = Math.random() * 0.3 + 0.1
    }

    return { positions, speeds }
  }, [count])

  useFrame((_, delta) => {
    if (!meshRef.current) return
    timeRef.current += delta

    const posArray = meshRef.current.geometry.attributes.position.array

    for (let i = 0; i < count; i++) {
      posArray[i * 3 + 1] += Math.sin(timeRef.current * speeds[i] + i) * 0.002
      posArray[i * 3] += Math.cos(timeRef.current * speeds[i] * 0.5 + i) * 0.001
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true
    meshRef.current.rotation.y = scrollProgress * 0.3
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00e5ff"
        size={0.03}
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}
