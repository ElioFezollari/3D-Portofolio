import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import meshData from "../../Data/bookMeshData.json"

const BookImages = () => {
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
    </>
  );
};

export default BookImages;
