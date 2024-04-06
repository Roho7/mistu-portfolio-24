"use client";
import {
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { BufferGeometry, Mesh, NormalBufferAttributes } from "three";
import { easing } from "maath";

const Shape = () => {
  const ref = useRef<Mesh<BufferGeometry<NormalBufferAttributes>>>(null);

  useFrame((state, delta) => {
    if (window.innerWidth < 768) {
      ref.current?.position.set(1.5, 2.5, 0);
      ref.current?.scale.set(0.3, 0.3, 0.3);
    } else {
      ref.current?.position.set(4, 1, 0);
      ref.current?.scale.set(0.5, 0.5, 0.5);
    }
    if (!ref.current) return;
    ref.current.rotation.x += 0.001;
    ref.current.rotation.y += 0.001;
    ref.current.rotation.z += 0.001;

    if (window.innerWidth < 768) return;
    easing.damp3(
      state.camera.position,
      [
        Math.sin(-state.pointer.x) * 5,
        state.pointer.y * 3.5,
        15 + Math.cos(state.pointer.x) * 10,
      ],
      0.2,
      delta,
    );
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <mesh ref={ref} castShadow receiveShadow>
      <torusKnotGeometry args={[3, 1, 256, 32]} />
      <meshStandardMaterial metalness={0.3} roughness={9} />
      <MeshTransmissionMaterial
        backside
        transmission={1.1}
        backsideThickness={5}
        thickness={2}
      />
    </mesh>
  );
};

const Scene = () => {
  const [eventSource, setEventSource] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // This code runs after the component mounts, which means it's client-side
    const heroElement = document.getElementById("hero");
    if (heroElement) {
      setEventSource(heroElement);
    }
  }, []);
  return (
    eventSource && (
      <div id="canvas-container" className="absolute w-screen h-screen -top-10">
        <Canvas
          eventSource={eventSource}
          eventPrefix="client"
          shadows
          camera={{ position: [0, 0, 20], fov: 20 }}>
          <ambientLight intensity={0.6} color="#AEC926" />

          <directionalLight
            position={[-20, 90, 0]}
            color="#AEC926"
            intensity={6}
          />
          <Shape />
          <Environment preset="city">
            <Lightformer
              intensity={3}
              position={[10, 5, 0]}
              scale={[10, 50, 1]}
              onUpdate={(self) => self.lookAt(0, 0, 0)}
            />
          </Environment>
        </Canvas>
      </div>
    )
  );
};

export default Scene;
