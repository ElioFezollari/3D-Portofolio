import { PerspectiveCamera } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import * as THREE from 'three'
const PCamera = () => {
  const { camera } = useThree();


  function test() {
    console.log('hi')
    gsap.to(camera.position, { x: -1.4670931555005555, y: 3.873290827039308, z: -3.319999068769551 ,      duration: 2,
        ease: "power1.inOut",
        
    });
    gsap.to(camera.rotation, {
        x: -1.3017331201951894,
        y: 
        1.4613199765544966,
        z: 
        1.3001904001691629,
        duration: 2,
        ease: "power1.inOut",
      });
  }
  test()
  return (
    <PerspectiveCamera
      makeDefault
      position={[-2.8361929451685057, 5.9, 2.0498575431467745]}
      fov={45}
      near={0.1}
      far={10}
      rotation={[-1.5707973267351913, 1.4432887733041577e-8, 3.14]}
    />
  );
};

export default PCamera;
