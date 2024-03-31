"use client";
import {
  Effects,
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame, Vector3 } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { BufferGeometry, Mesh, NormalBufferAttributes } from "three";
import { FilmPass, WaterPass, UnrealBloomPass, LUTPass } from "three-stdlib";
import { extend } from "@react-three/fiber";
import { easing } from "maath";

extend({ WaterPass, UnrealBloomPass, FilmPass, LUTPass });

const Shape = () => {
  const ref = useRef<Mesh<BufferGeometry<NormalBufferAttributes>>>(null);
  const [scale, setScale] = useState(0.5);
  const [position, setPosition] = useState([5, 0, 0]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    if (window.innerWidth < 768) return;
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

  useEffect(() => {
    setScale(window.innerWidth < 768 ? 0.3 : 0.5);
    setPosition(window.innerWidth < 768 ? [2, 2, 0] : [4, 0, 0]);
  }, [window.innerWidth]);

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      scale={scale}
      position={position as Vector3}>
      <torusKnotGeometry args={[3, 1, 256, 32]} />

      {/* <meshStandardMaterial metalness={0.3} roughness={9} /> */}
      <MeshTransmissionMaterial
        backside
        transmission={1.1}
        // color={"#AEC926"}
        // blendColor="#556508"
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
      <div id="canvas-container" className="absolute -top-20 w-screen h-screen">
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
          {/* <spotLight
          position={[40, 20, 10]}
          angle={0.15}
          penumbra={1}
          intensity={0.1}
          distance={11}
          castShadow
        /> */}
          <Shape />
          <Environment preset="city">
            <Lightformer
              intensity={3}
              position={[10, 5, 0]}
              scale={[10, 50, 1]}
              onUpdate={(self) => self.lookAt(0, 0, 0)}
            />
          </Environment>
          <Effects disableGamma>
            {/* <waterPass ref={water} factor={1} /> */}
            {/* <unrealBloomPass args={[undefined, 1, 1, 0]} /> */}
            {/* <filmPass args={[10, 9, 1500, false]} /> */}
            {/* <lUTPass lut={data.texture} intensity={0.75} /> */}
          </Effects>
        </Canvas>
      </div>
    )
  );
};

export default Scene;
