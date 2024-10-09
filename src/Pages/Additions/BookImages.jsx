import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import meshData from "../../Data/bookMeshData.json"
import { useState } from "react";
import {  Text, useCursor } from "@react-three/drei";

const BookImages = () => {
  const [openModal,setOpenModal] = useState(false)

  const handleInfoModal = (modalState) => {
    setOpenModal(modalState)
  }
  useCursor(openModal)
  
  return (
    <>
      {meshData.map(({ texturePath, scale, position, rotation }, index) => {
        const texture = useLoader(TextureLoader, texturePath);
        return (
          <mesh key={index} scale={scale} position={position} rotation={rotation}>
            <planeGeometry />
            <meshBasicMaterial map={texture} transparent={true} />
          </mesh>
        );
      })}
      <mesh onPointerEnter={()=>handleInfoModal(true)} onPointerLeave={()=>handleInfoModal(false)} position={[-2.98, 3.96, -3.015]}  scale={[0.02, 0.02, 0.02]}>
        <sphereGeometry />
        <meshBasicMaterial color="#50635D" opacity={0.} />
        <Text
          position={[1, 0.7, -0.15]}
          rotation={[0,Math.PI/2,0]}
          fontSize={1} 
          color="#FFFFFF"
          anchorX="center"
          anchorY="center"

        >
          &lt;/&gt;
        </Text>
      </mesh>
    </>
  );
};

export default BookImages;
