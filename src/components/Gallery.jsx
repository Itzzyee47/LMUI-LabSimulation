import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import FPSControls from './gwithFPS';
import { lights } from './lightValues';


function PointLight() {
  return <pointLight position={[0, 70, 0]} intensity={5000} />;
}

function RectAreaLights({ lights }) {
  return lights.map((lightData, index) => {
    const { position, rotation, color = 0xffffff, intensity = 20, width = 45, height = 4 } = lightData;
    return (
      <rectAreaLight
        key={index}
        color={color}
        intensity={intensity}
        width={width}
        height={height}
        position={position}
        rotation={rotation}
      />
    );
  });
}


function Model({ path, scale = [1, 1, 1], position = [0, 0, 0], name }) {
  const { scene } = useGLTF(path);
  scene.scale.set(...scale);
  scene.position.set(...position);
  scene.name = name;

  const modelRef = useRef();
  useFrame(() => {
    modelRef.current.rotation.y += 0.01;
  });
  
  // Optional: Traverse to modify materials (e.g., making it reflective)
  scene.traverse((child) => {
    if (child.isMesh) {
      //child.material.roughness = 0.2;
      child.material.envMapIntensity = 0.3;
    }
  });
  
  return <primitive ref={modelRef} object={scene} />;
}

function Model2({ path, scale = [1, 1, 1], position = [0, 0, 0], name }) {
  const { scene } = useGLTF(path);
  scene.scale.set(...scale);
  scene.position.set(...position);
  scene.name = name;
  
  // Optional: Traverse to modify materials (e.g., making it reflective)
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.roughness = 0.1;
      child.material.envMapIntensity = 0;
    }
  });
  
  return <primitive object={scene} />;
}

function ThreeScene() {
  const [loading, setLoading] = useState(true);

  return (
    <>
    <Canvas
      camera={{ position: [40.31007111176608, 44.58551523738378, -86.89385076245733], fov: 65 }}
      onCreated={({ gl }) => gl.setPixelRatio(window.devicePixelRatio)}
    >
      <ambientLight intensity={1} />
      
        
        <Model2 path="/models/labSim.glb" scale={[10, 10, 10]} position={[0, 30, 0]} name="Gallery" />
      
      <PointLight />
      <FPSControls />
    </Canvas>

    </>
  ); 
}

export default ThreeScene;