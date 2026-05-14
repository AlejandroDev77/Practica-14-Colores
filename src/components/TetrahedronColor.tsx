import { useState, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import "../styles/TetrahedronColor.scss";

const RotatingTetrahedron = ({ hue }: { hue: number }) => {
    const meshRef = useRef<THREE.Mesh>(null);

  
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.01;
            meshRef.current.rotation.x += 0.005;
        }
    });


    const geometry = useMemo(() => {
        const geo = new THREE.TetrahedronGeometry(1.5, 0);
        const count = geo.attributes.position.count;
        
        const colors = new Float32Array(count * 3);
        

        const harmony = [0, 90, 180, 270];
        
        for (let i = 0; i < 4; i++) {
            const color = new THREE.Color();
            color.setHSL(((hue + harmony[i]) % 360) / 360, 0.7, 0.5);
           
            for (let j = 0; j < 3; j++) {
                const index = (i * 3 + j) * 3;
                colors[index] = color.r;
                colors[index + 1] = color.g;
                colors[index + 2] = color.b;
            }
        }
        
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        return geo;
    }, [hue]);

    return (
        <mesh ref={meshRef}>
            <primitive object={geometry} attach="geometry" />
            <meshStandardMaterial vertexColors side={THREE.DoubleSide} flatShading />
        </mesh>
    );
};

const TetrahedronColor: React.FC = () => {
    const [hue, setHue] = useState<number>(200);

    return (
        <section className="tetrahedron-container">
            <h3>Tetraedro 3D </h3>
            <p></p>
            
            <input 
                type="range" 
                min="0" 
                max="360" 
                value={hue} 
                onChange={(e) => setHue(Number(e.target.value))} 
            />

            <div className="canvas-container">
                <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
                    <ambientLight intensity={0.7} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} />
                    
                    <RotatingTetrahedron hue={hue} />
                    
                    <OrbitControls enableZoom={true} />
                </Canvas>
            </div>
        </section>
    );
};

export default TetrahedronColor;
