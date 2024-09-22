import { Text } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const TVImages = () => {
  const northPole1Texture = useLoader(
    TextureLoader,
    "./images/Northpole-1.png"
  );
  const github = useLoader(TextureLoader,'./images/arrow.svg')
  const xPos = 3.64342015182745911;
  return (
    <>
      <mesh
        scale={[1.0345 * 2.37, 0.5 * 2.37, 0]}
        position={[xPos - 0.001, 3.51329692872578, -1.783102346664854]}
        rotation={[0, 3.14 * 1.5, 0]}
      >
        <Text
          scale={[0.13, 0.3, 0.3]}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          Projects
        </Text>
      </mesh>

      <mesh
        scale={[1.0345 * 2.37, 0.31, 0]}
        position={[xPos - 0.0001, 2.90229692872578, -1.783102346664854]}
        rotation={[0, 3.14 * 1.5, 0]}
      >
        <planeGeometry></planeGeometry>
        <meshBasicMaterial color={"#E2E2E2"} />
      </mesh>

      <mesh
        scale={[1.0345 * 2.37, 0.5 * 2.37, 0]}
        position={[xPos, 2.16329692872578, -1.783102346664854]}
        rotation={[0, 3.14 * 1.5, 0]}
      >
        <planeGeometry />
        <meshBasicMaterial map={northPole1Texture} transparent={true} />
      </mesh>
      <mesh
        scale={[1.0345 * 2.37, 0.5 * 2.37, 0]}
        position={[xPos - 0.001, 2.91329692872578, -1.783102346664854]}
        rotation={[0, 3.14 * 1.5, 0]}
      >
        <Text
          scale={[0.13, 0.3, 0.3]}
          color={"#4F5B9C"}
          anchorX="center"
          anchorY="middle"
        >
          The North Pole
        </Text>
      </mesh>
      <mesh  position={[xPos+0.05,2.3,-0.215]} scale={[0.5,0.5,1]}        rotation={[0, 3.14 * 1.5, 0]} >
            <planeGeometry />
            <meshBasicMaterial map={github} transparent={true} />
          </mesh>
          <mesh position={[xPos+0.05,2.3,-3.35]} scale={[0.5,0.5,1]}        rotation={[3.14, 3.14 * 1.5, 0]} >
            <planeGeometry />
            <meshBasicMaterial map={github} transparent={true} />
          </mesh>
    </>
  );
};

export default TVImages;
