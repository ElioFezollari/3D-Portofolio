import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const BookImages = () => {
  const jsTexture = useLoader(TextureLoader, "./Javascript.png");
  const cssTexture = useLoader(TextureLoader,'./CSS.png')
  const htmlTexture = useLoader(TextureLoader,'./Html.png')
  const reactTexture = useLoader(TextureLoader,'./React.svg')
  const threeJsTexture = useLoader(TextureLoader,'./ThreeJs.png')
  const phpTexture = useLoader(TextureLoader,'./Php.svg')
  const javaTexture= useLoader(TextureLoader,'./Java.svg')
  const springBoot = useLoader(TextureLoader,'./SpringBoot.svg')
  const cSharp = useLoader(TextureLoader,'./cSharp.svg')
  const dotNet = useLoader(TextureLoader,'./dotNet.svg')
  const mysql = useLoader(TextureLoader,'./mysql.svg')
  const sqlServer = useLoader(TextureLoader,'./sqlServer.svg')
  const mongoDb = useLoader(TextureLoader,'./mongoDb.svg')
  const nodeJs = useLoader(TextureLoader,'./nodeJs.svg')
  const devOps = useLoader(TextureLoader,'./devops.svg')
  const docker = useLoader(TextureLoader,'./docker.svg')
  const github = useLoader(TextureLoader,'./github.svg')
  return (
    <>
      <mesh  scale={[0.10,0.10,0.13]} position={[-2.99, 3.6, -3.04]} rotation={[0,3.14/2,0]}>
        <planeGeometry  />
        <meshBasicMaterial map={jsTexture} />
      </mesh>
      <mesh  scale={[0.10,0.13,0.10]}  position={[-3.03, 3.6, -3.26]} rotation={[3.14/11,1.3,0]}>
        <planeGeometry  />
        <meshBasicMaterial transparent={true} map={cssTexture} />
      </mesh>
      <mesh  scale={[0.13,0.13,0.10]}  position={[-3.15, 3.6, -3.54]} rotation={[-3.14/25,3.14/2,0]}>
        <planeGeometry  />
        <meshBasicMaterial transparent={true} map={htmlTexture} />
      </mesh>
      <mesh  scale={[0.2,0.14,0.10]}  position={[-2.955, 2.67, -2.58]} rotation={[0,3.14/2,0]}>
        <planeGeometry  />
        <meshBasicMaterial transparent={true} map={reactTexture} />
      </mesh>
      <mesh  scale={[0.11,0.11,0.10]}  position={[-2.955, 2.85, -2.97]} rotation={[0,3.14/2,0]}>
        <planeGeometry  />
        <meshBasicMaterial transparent={true} map={threeJsTexture} />
      </mesh>
      <mesh  scale={[0.13,0.13,0.10]}  position={[-3.22, 2.33, -3.04]} rotation={[3.14,3.14,3.8]}>
        <planeGeometry  />
        <meshBasicMaterial transparent={true} map={phpTexture} />
      </mesh>
      <mesh  scale={[0.13,0.13,0.10]}  position={[-3.012, 2.3, -2.95]} rotation={[3.14,3.14,3]} >
        <planeGeometry  />
        <meshBasicMaterial transparent={true} map={javaTexture} />
      </mesh>
      <mesh  scale={[0.10,0.10,0.10]}  position={[-3.065, 1.9, -2.95]} rotation={[3.14,3.14,3]} >
        <planeGeometry  />
        <meshBasicMaterial transparent={true} map={springBoot} />
      </mesh>
      <mesh  scale={[0.12,0.12,0.10]}  position={[-3.54, 1.895, -2.92]} rotation={[3.14,3.14,3.14]} >
        <planeGeometry  />
        <meshBasicMaterial transparent={true} map={cSharp} />
      </mesh>
      <mesh  scale={[0.10,0.10,0.10]}  position={[-3.34, 1.895, -2.92]} rotation={[3.14,3.14,3.14]} >
        <planeGeometry  />
        <meshBasicMaterial transparent={true} map={dotNet} />
      </mesh>
      <mesh  scale={[0.10,0.10,0.10]}  position={[-2.985, 1.5, -2.965]} rotation={[-3,3.14,3.44]} >
        <planeGeometry  />
        <meshBasicMaterial transparent={true} map={mysql} />
      </mesh>
      <mesh  scale={[0.10,0.10,0.10]}  position={[-2.9, 1.2, -3]} rotation={[-3,3.14,3.84]} >
        <planeGeometry  />
        <meshBasicMaterial transparent={true} map={sqlServer} />
      </mesh>
      <mesh  scale={[0.10,0.10,0.10]}  position={[-2.485, 1.36, -2.98]} rotation={[-2.85,3.14,3]} >
        <planeGeometry  />
        <meshBasicMaterial transparent={true} map={mongoDb} />
      </mesh>
      <mesh  scale={[0.10,0.10,0.10]}  position={[-2.705, 1.36, -3.1]} rotation={[3.14,3.14,3.14]} >
        <planeGeometry  />
        <meshBasicMaterial transparent={true} map={nodeJs} />
      </mesh>
      <mesh  scale={[0.3,0.10,0.10]}  position={[-3.35, 0.73, -3]} rotation={[3.14,3.2,2.7]} >
        <planeGeometry  />
        <meshBasicMaterial transparent={true} map={devOps} />
      </mesh>
      <mesh  scale={[0.13,0.13,0.10]}  position={[-3.31, 0.465, -3.018]} rotation={[3.14,3.14,3.14]} >
        <planeGeometry  />
        <meshBasicMaterial transparent={true} map={docker} />
      </mesh>
      <mesh  scale={[0.12,0.12,0.10]}  position={[-3.29, 0.335, -3.018]} rotation={[3.14,3.14,3.14]} >
        <planeGeometry  />
        <meshBasicMaterial transparent={true} map={github} />
      </mesh>
    </>
  );
};

export default BookImages;
