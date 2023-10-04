import { Canvas } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  Preload,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import Loader3D from "./Loader";
const AvatarCanvas = () => {
  const Avatar3d = useGLTF("/model.glb");
  const [index, setIndex] = useState(0);
  const [isclicked, setIsClicked] = useState(false);
  const { actions, names } = useAnimations(Avatar3d.animations, Avatar3d.scene);

  useEffect(() => {
    actions[names[index]]?.reset().fadeIn(0.5).play();

    return () => {
      actions[names[index]]?.fadeOut(0.5).stop();
    };
  }, [index, actions, names]);

  return (
    <group>
      <primitive
        object={Avatar3d.scene}
        scale={2}
        position-y={-2}
        rotation-y={0.5}
        position-x={-0.4}
      />
      <Html position={[0, 0, 0]}>
        <button
          className="bg-primary text-white w-[100px] m-8 p-4 rounded-lg text-lg items-center justify-center hover:bg-slate-300 hover:text-primary hover:scale-105 duration-300 transition-all"
          onClick={() => {
            setIndex((index + 1) % names.length);
            setIsClicked(!isclicked);
          }}
        >
          {isclicked ? "Stop" : "Play"}
        </button>
      </Html>
    </group>
  );
};

const Avatar = () => {
  return (
    <Canvas dpr={[0, 2]}>
      <ambientLight intensity={1.6} />
      <pointLight position={[1, 1, 1]} />
      <OrbitControls enabled={false} />
      <Suspense fallback={<Loader3D />}>
        <AvatarCanvas />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Avatar;
