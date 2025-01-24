import { useGLTF } from "@react-three/drei";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { sRGBEncoding } from "@react-three/drei/helpers/deprecated";
import RoomAdditions from "../RoomAdditions";

export default function Room() {
  const texture = useLoader(TextureLoader, "./OptBake.jpg");
  texture.flipY = false;
  texture.colorSpace = sRGBEncoding;
  const { nodes } = useGLTF("./Room.glb");
  return (
    <>
      <mesh rotation={[0, 3.14 * 2, 0]} geometry={nodes.baked.geometry}>
        <meshBasicMaterial map={texture}></meshBasicMaterial>
      </mesh>
      <RoomAdditions />
      
    </>
  );
}
