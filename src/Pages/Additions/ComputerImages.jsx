import { useCursor } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useState } from "react";
import { TextureLoader } from "three";


const ComputerImages = () => {
  const [toggleHover, setToggleHover] = useState(false);
  const [linkedinColor, setLinkedinColor] = useState("white");
  const [githubColor, setGithubColor] = useState("white");

  useCursor(toggleHover)

  const handleHover = (setColor, color, hoverColor) => {
    setColor(color === 'white' ? hoverColor : 'white');
    setToggleHover(color === 'white');
  };

  const linkedin = useLoader(TextureLoader, './images/monitor_images/linkedin.png');
  const portofolioWeb = useLoader(TextureLoader, './images/monitor_images/Web.webp');
  const github = useLoader(TextureLoader, './images/monitor_images/github-square.svg');

  return (
    <>
      <mesh
        rotation={[3.14, 0, 3.142]}
        position={[2.405, 1.882, 3.419]}
        scale={[0.8, 0.415, 0.3]}
      >
        <planeGeometry />
        <meshBasicMaterial map={portofolioWeb} transparent={true} />
      </mesh>

      <mesh
        position={[2.684, 1.498, 2.893]}
        scale={[0.04, 0.04, 0.04]}
        onPointerEnter={() => handleHover(setLinkedinColor, linkedinColor, '#e6e6e6')}
        onPointerLeave={() => handleHover(setLinkedinColor, linkedinColor, 'white')}
        onClick={()=>window.open('https://www.linkedin.com/in/elio-fezollari-46a041289/', '_blank')}
      >
        <boxGeometry />
        <meshBasicMaterial map={linkedin} color={linkedinColor} transparent={false} />
      </mesh>

      <mesh
        position={[2.25, 1.5, 3.393]}
        scale={[0.08, 0.08, 0.08]}
        onPointerEnter={() => handleHover(setGithubColor, githubColor, '#e6e6e6')}
        onPointerLeave={() => handleHover(setGithubColor, githubColor, 'white')}
        onClick={()=>window.open('https://github.com/ElioFezollari', '_blank')}
      >
        <boxGeometry />
        <meshBasicMaterial map={github} color={githubColor} transparent={false} />
      </mesh>
    </>
  );
};

export default ComputerImages;
