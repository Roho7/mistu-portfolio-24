"use client";
import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshTransmissionMaterial,
  Environment,
  Lightformer,
} from "@react-three/drei";
import { BufferGeometry, Mesh } from "three";
import { easing } from "maath";

const Shape = () => {
  const ref = useRef<Mesh<BufferGeometry>>(null);

  useFrame((state, delta) => {
    ref.current?.position.set(4, 1, 0);
    ref.current?.scale.set(0.5, 0.5, 0.5);

    if (!ref.current) return;
    ref.current.rotation.x += 0.001;
    ref.current.rotation.y += 0.001;
    ref.current.rotation.z += 0.001;

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
    <mesh ref={ref}>
      <torusKnotGeometry args={[3, 1, 130, 32]} />
      <MeshTransmissionMaterial
        transmission={1.1}
        thickness={2}
        backside
        backsideThickness={5}
      />
    </mesh>
  );
};

const Scene = () => {
  const eventSourceRef = useRef<HTMLElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const heroElement = document.getElementById("hero");
    eventSourceRef.current = heroElement;
    if (heroElement) {
      setIsReady(true);
    }
  }, []);

  return isReady ? (
    <div
      id="canvas-container"
      className="hidden lg:flex absolute w-screen h-screen -top-10">
      <Canvas
        eventSource={
          eventSourceRef.current ? eventSourceRef.current : undefined
        }
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
  ) : null;
};

export default Scene;
