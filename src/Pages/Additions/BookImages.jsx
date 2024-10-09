import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import meshData from "../../Data/bookMeshData.json"
import { useState } from "react";

const BookImages = () => {
  const [openModal,setOpenModal] = useState()
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
      <mesh  position={[-2.98, 3.96, -3.015]} scale={[0.02,0.02,0.02]}>
        <sphereGeometry/>
        <meshBasicMaterial color="#50635D"/>
      </mesh>
    </>
  );
};

export default BookImages;
