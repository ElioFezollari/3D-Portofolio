import { Text } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import Projects from "./Projects";
import { useEffect, useState } from "react";
import projectMeshData from "../../Data/projectMeshData.json"
const TVImages = () => {
  const [toggleHover,setToggleHover] = useState();
  const [currentProject,setCurrentProject] = useState(0)
  const maxProjects = 1
  useEffect(() => {
    document.body.style.cursor = toggleHover ? 'pointer' : 'auto'
  }, [toggleHover])

  const northPole1Texture = useLoader(
    TextureLoader,
    "./images/tv_images/Northpole-1.png"
  );
  const arrows = useLoader(TextureLoader, "./images/tv_images/arrow.svg");
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
          color="#3F3F30"
          anchorX="center"
          anchorY="middle"
        >
          Projects
        </Text>
      </mesh>

      <mesh onClick={() => setCurrentProject((prev) => Math.min(prev + 1, maxProjects))} onPointerEnter={()=>setToggleHover(true)} onPointerLeave={()=>setToggleHover(false)}
        position={[xPos + 0.05, 2.3, -0.215]}
        scale={[0.5, 0.5, 1]}
        rotation={[0, 3.14 * 1.5, 0]}
      >
        <planeGeometry />
        <meshBasicMaterial map={arrows} transparent={true} />
      </mesh>
      <mesh         onClick={() => setCurrentProject((prev) => Math.max(prev - 1, 0))}  onPointerEnter={()=>setToggleHover(true)} onPointerLeave={()=>setToggleHover(false)}
        position={[xPos + 0.05, 2.3, -3.35]}
        scale={[0.5, 0.5, 1]}
        rotation={[3.14, 3.14 * 1.5, 0]}

      >
        <planeGeometry />
        <meshBasicMaterial map={arrows} transparent={true} />
      </mesh>

      <Projects texture={northPole1Texture} xPos={xPos} title={projectMeshData[currentProject].title} textColor={projectMeshData[currentProject].textColor} />
    </>
  );
};

export default TVImages;
