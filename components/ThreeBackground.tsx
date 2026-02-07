import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Augment both global and module-scoped JSX to ensure Three.js elements are recognized
// This handles different TypeScript configurations and React versions
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      fog: any;
      ambientLight: any;
      mesh: any;
      tetrahedronGeometry: any;
      meshStandardMaterial: any;
      octahedronGeometry: any;
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      fog: any;
      ambientLight: any;
      mesh: any;
      tetrahedronGeometry: any;
      meshStandardMaterial: any;
      octahedronGeometry: any;
    }
  }
}

// Helper to generate points in a sphere with more organic distribution
const generateGalaxyPoints = (count: number, radius: number) => {
  const points = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const colorInside = new THREE.Color('#a855f7'); // Purple
  const colorOutside = new THREE.Color('#4f46e5'); // Blue

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const r = Math.random() * radius;
    const spinAngle = r * 1; // Spiral effect
    const branchAngle = ((i % 3) * 2 * Math.PI) / 3; // 3 branches

    const x = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * radius;
    const y = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * radius;
    const z = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * radius;

    points[i3] = x;
    points[i3 + 1] = y;
    points[i3 + 2] = z;
    
    // Mixed colors
    const mixedColor = colorInside.clone();
    mixedColor.lerp(colorOutside, r / radius);
    
    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;
  }
  return { positions: points, colors };
};

const StarField = (props: any) => {
  const ref = useRef<any>(null);
  
  // Generate deeper, more complex field
  const { positions, colors } = useMemo(() => generateGalaxyPoints(5000, 5), []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Slow, majestic rotation
      ref.current.rotation.x -= delta / 50;
      ref.current.rotation.y -= delta / 40;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          vertexColors
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-10] pointer-events-none" style={{ background: '#020205' }}>
      <Canvas camera={{ position: [0, 0, 3], fov: 75 }} gl={{ antialias: false }}>
        <fog attach="fog" args={['#020205', 1, 10]} />
        <ambientLight intensity={0.5} />
        
        <StarField />
        
        <Sparkles 
          count={200} 
          scale={8} 
          size={2} 
          speed={0.4} 
          opacity={0.5} 
          color="#a855f7" 
        />
        
        {/* Floating cinematic debris */}
        <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
             <mesh position={[-3, 2, -2]} rotation={[0, 0.5, 0]}>
                <tetrahedronGeometry args={[0.2]} />
                <meshStandardMaterial color="#6366f1" wireframe transparent opacity={0.2} />
             </mesh>
             <mesh position={[3, -2, -1]} rotation={[0, -0.5, 0]}>
                <octahedronGeometry args={[0.3]} />
                <meshStandardMaterial color="#a855f7" wireframe transparent opacity={0.2} />
             </mesh>
        </Float>
      </Canvas>
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_120%)] pointer-events-none"></div>
    </div>
  );
};

export default ThreeBackground;