import * as THREE from "three";
import { Canvas, ThreeElements, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { theme } from "@/theme";
import { AsciiRenderer } from "@react-three/drei";

const Tetra = (props: ThreeElements["mesh"]) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta / 5;
    meshRef.current.rotation.y += delta / 3;
    meshRef.current.rotation.z += delta / 5;
  });
  return (
    <mesh {...props} ref={meshRef} scale={3}>
      <tetrahedronGeometry />
      <meshStandardMaterial color={theme.primary} />
    </mesh>
  );
};

export const AsciiArt = () => {
  return (
    <Canvas
      frameloop='always'
      style={{ maxWidth: "400px", height: "350px", padding: "8px" }}
    >
      <AsciiRenderer
        color
        // fgColor={theme.primary}
        invert={false}
        bgColor={"transparent"}
        characters={" @#%*+|/!;:~,.^`'\"()[]{}<>"}
        resolution={0.13}
      />
      <ambientLight intensity={Math.PI / 5} />
      <pointLight position={[0, -4, 4]} decay={0} intensity={Math.PI} />
      <Tetra position={[0, 0, 0]} />
    </Canvas>
  );
};
