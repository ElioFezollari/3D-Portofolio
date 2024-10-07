import { PerspectiveCamera } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

import { useState } from "react";
import useCameraAnimation from '../../Hooks/useCameraAnimation'
const PCamera = ({ wheelDirection, setWheelDirection,wheelEnabled,setWheelEnabled }) => {
  const { camera } = useThree();
  const [animationState, setAnimationState] = useState(0);

  useCameraAnimation(camera, animationState, wheelDirection,setWheelDirection,setAnimationState,wheelEnabled,setWheelEnabled);
  

  return (
    <PerspectiveCamera
      makeDefault
      position={[-2.8361929451685057, 5.9, 2.0498575431467745]}
      fov={45}
      near={0.1}
      far={20}
      rotation={[-1.5707973267351913, 1.4432887733041577e-8, 3.14]}
    />
  );
};

export default PCamera;
