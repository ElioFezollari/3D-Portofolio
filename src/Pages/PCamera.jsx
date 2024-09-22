import { PerspectiveCamera } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import { useState } from "react";
import useCameraAnimation from "../Hooks/useCameraAnimation";
const PCamera = ({ wheelDirection, setWheelDirection,wheelEnabled,setWheelEnabled }) => {
  const { camera } = useThree();
  const [animationState, setAnimationState] = useState(0);

  useCameraAnimation(camera, animationState, wheelDirection,setWheelDirection,setAnimationState,wheelEnabled,setWheelEnabled);
  

  return (
    <PerspectiveCamera
      makeDefault
      position={[0.69342015182745911, 2.4974429692872578, -1.783102346664854]}
      fov={45}
      near={0.1}
      far={20}
      rotation={[-0.4296081352169132, -1.549186303877301, -0.42651941370609376]}
    />
  );
};

export default PCamera;
