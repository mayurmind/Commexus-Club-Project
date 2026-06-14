import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function CircuitBoard({ scrollProgress = 0, mousePosition = { x: 0, y: 0 } }) {
  const groupRef = useRef()
  const ledsRef = useRef([])
  const timeRef = useRef(0)

  const boardGeometry = useMemo(() => {
    const shape = new THREE.Shape()
    const w = 3.2
    const h = 2.2
    const r = 0.15
    shape.moveTo(-w / 2 + r, -h / 2)
    shape.lineTo(w / 2 - r, -h / 2)
    shape.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r)
    shape.lineTo(w / 2, h / 2 - r)
    shape.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2)
    shape.lineTo(-w / 2 + r, h / 2)
    shape.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r)
    shape.lineTo(-w / 2, -h / 2 + r)
    shape.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2)
    return new THREE.ExtrudeGeometry(shape, { depth: 0.08, bevelEnabled: false })
  }, [])

  const traces = useMemo(() => {
    const lines = []
    const tracePaths = [
      [[-1.2, 0.6], [-0.5, 0.6], [-0.5, 0.2], [0, 0.2]],
      [[-1.2, 0.3], [-0.8, 0.3], [-0.8, -0.1], [-0.3, -0.1]],
      [[-1.2, -0.3], [-0.6, -0.3], [-0.6, -0.6], [0.2, -0.6]],
      [[0.4, 0.5], [0.8, 0.5], [0.8, 0.1], [1.3, 0.1]],
      [[0.4, -0.2], [0.7, -0.2], [0.7, -0.5], [1.3, -0.5]],
      [[0.1, 0.8], [0.1, 0.5], [0.5, 0.5]],
      [[-0.3, -0.8], [-0.3, -0.5], [0.3, -0.5], [0.3, -0.2]],
      [[-1.0, -0.7], [-0.3, -0.7]],
      [[0.6, 0.8], [0.6, 0.3]],
      [[1.0, 0.7], [1.0, 0.3], [1.3, 0.3]],
      [[-0.9, 0.8], [-0.9, 0.5]],
      [[0.8, -0.7], [1.2, -0.7], [1.2, -0.3]],
    ]

    tracePaths.forEach((path) => {
      const points = path.map(([x, y]) => new THREE.Vector3(x, y, 0.09))
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      lines.push(geometry)
    })
    return lines
  }, [])

  const pads = useMemo(() => {
    const positions = [
      [-1.3, 0.6], [-1.3, 0.3], [-1.3, 0], [-1.3, -0.3], [-1.3, -0.6],
      [1.4, 0.3], [1.4, 0.1], [1.4, -0.1], [1.4, -0.3], [1.4, -0.5],
      [-0.6, 0.9], [-0.3, 0.9], [0, 0.9], [0.3, 0.9], [0.6, 0.9],
      [-0.6, -0.9], [-0.3, -0.9], [0, -0.9], [0.3, -0.9], [0.6, -0.9],
    ]
    return positions
  }, [])

  const leds = useMemo(() => {
    return [
      { pos: [-0.8, 0.6, 0.12], color: '#00e5ff' },
      { pos: [0.3, 0.3, 0.12], color: '#00ff88' },
      { pos: [1.0, -0.4, 0.12], color: '#ff6b35' },
      { pos: [-0.5, -0.5, 0.12], color: '#00e5ff' },
      { pos: [0.7, 0.7, 0.12], color: '#ff3366' },
    ]
  }, [])

  const vias = useMemo(() => {
    return [
      [0, 0.2], [-0.3, -0.1], [0.5, 0.5], [-0.6, -0.6],
      [0.2, -0.6], [0.8, 0.1], [-0.5, 0.2], [0.7, -0.2],
    ]
  }, [])

  useFrame((_, delta) => {
    if (!groupRef.current) return
    timeRef.current += delta

    const targetRotY = scrollProgress * Math.PI * 0.5 + mousePosition.x * 0.15
    const targetRotX = Math.sin(scrollProgress * Math.PI) * 0.2 + mousePosition.y * 0.1
    const floatY = Math.sin(timeRef.current * 0.8) * 0.08

    groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.05
    groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.05
    groupRef.current.position.y += (floatY - groupRef.current.position.y) * 0.05

    ledsRef.current.forEach((led, i) => {
      if (led) {
        const pulse = Math.sin(timeRef.current * 2 + i * 1.5) * 0.5 + 0.5
        led.material.emissiveIntensity = 0.5 + pulse * 1.5
      }
    })
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* PCB Board */}
      <mesh geometry={boardGeometry} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#0d3320"
          roughness={0.7}
          metalness={0.3}
        />
      </mesh>

      {/* PCB Back */}
      <mesh position={[0, 0, -0.01]} rotation={[0, 0, 0]}>
        <planeGeometry args={[3.2, 2.2]} />
        <meshStandardMaterial color="#0a2818" roughness={0.8} />
      </mesh>

      {/* Copper Traces */}
      {traces.map((geo, i) => (
        <line key={`trace-${i}`} geometry={geo}>
          <lineBasicMaterial color="#c4993d" linewidth={1} transparent opacity={0.8} />
        </line>
      ))}

      {/* IC Chip (center) */}
      <mesh position={[0, 0, 0.09]}>
        <boxGeometry args={[0.7, 0.7, 0.1]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.4} metalness={0.7} />
      </mesh>
      {/* IC marking dot */}
      <mesh position={[-0.2, 0.2, 0.15]}>
        <circleGeometry args={[0.04, 16]} />
        <meshStandardMaterial color="#555" />
      </mesh>

      {/* Smaller IC */}
      <mesh position={[0.9, 0, 0.09]}>
        <boxGeometry args={[0.4, 0.3, 0.06]} />
        <meshStandardMaterial color="#222" roughness={0.5} metalness={0.6} />
      </mesh>

      {/* Capacitors */}
      <mesh position={[-0.9, -0.1, 0.09]}>
        <boxGeometry args={[0.12, 0.08, 0.06]} />
        <meshStandardMaterial color="#b08040" roughness={0.6} metalness={0.5} />
      </mesh>
      <mesh position={[0.5, -0.3, 0.09]}>
        <boxGeometry args={[0.1, 0.06, 0.05]} />
        <meshStandardMaterial color="#b08040" roughness={0.6} metalness={0.5} />
      </mesh>

      {/* Resistor */}
      <mesh position={[-0.4, 0.5, 0.09]}>
        <boxGeometry args={[0.15, 0.05, 0.04]} />
        <meshStandardMaterial color="#333" roughness={0.7} />
      </mesh>

      {/* Solder Pads */}
      {pads.map(([x, y], i) => (
        <mesh key={`pad-${i}`} position={[x, y, 0.085]}>
          <circleGeometry args={[0.04, 12]} />
          <meshStandardMaterial color="#c4993d" metalness={0.8} roughness={0.3} />
        </mesh>
      ))}

      {/* Vias (through-holes) */}
      {vias.map(([x, y], i) => (
        <group key={`via-${i}`}>
          <mesh position={[x, y, 0.085]}>
            <ringGeometry args={[0.02, 0.035, 16]} />
            <meshStandardMaterial color="#c4993d" metalness={0.9} roughness={0.2} />
          </mesh>
        </group>
      ))}

      {/* LEDs */}
      {leds.map((led, i) => (
        <mesh
          key={`led-${i}`}
          position={led.pos}
          ref={(el) => { ledsRef.current[i] = el }}
        >
          <sphereGeometry args={[0.035, 12, 12]} />
          <meshStandardMaterial
            color={led.color}
            emissive={led.color}
            emissiveIntensity={1}
            transparent
            opacity={0.9}
          />
        </mesh>
      ))}

      {/* Crystal oscillator */}
      <mesh position={[-0.6, 0.1, 0.09]}>
        <boxGeometry args={[0.2, 0.1, 0.08]} />
        <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* USB connector */}
      <mesh position={[-1.5, 0, 0.06]}>
        <boxGeometry args={[0.25, 0.35, 0.15]} />
        <meshStandardMaterial color="#aaa" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  )
}
