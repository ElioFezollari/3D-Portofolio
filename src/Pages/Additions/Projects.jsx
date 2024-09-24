import { Text } from "@react-three/drei";
const Projects = ({ texture, xPos,title,textColor,bgColor }) => {
  return (
    <>
      {" "}
      <mesh
        scale={[1.0345 * 2.37, 0.31, 0]}
        position={[xPos - 0.0001, 2.90529692872578, -1.783102346664854]}
        rotation={[0, 3.14 * 1.5, 0]}
      >
        <planeGeometry></planeGeometry>
        <meshBasicMaterial toneMapped={false} color={bgColor} />
      </mesh>
      <mesh
        scale={[1.0345 * 2.37, 0.5 * 2.37, 0]}
        position={[xPos, 2.16329692872578, -1.783102346664854]}
        rotation={[0, 3.14 * 1.5, 0]}
      >
        <planeGeometry />
        <meshBasicMaterial map={texture} transparent={true} />
      </mesh>
      <mesh
        scale={[1.0345 * 2.37, 0.5 * 2.37, 0]}
        position={[xPos - 0.001, 2.91329692872578, -1.783102346664854]}
        rotation={[0, 3.14 * 1.5, 0]}
      >
        <Text
          scale={[0.13, 0.3, 0.3]}
          color={textColor}
          anchorX="center"
          anchorY="middle"
        >
          {title}
        </Text>
      </mesh>
    </>
  );
};
export default Projects;
