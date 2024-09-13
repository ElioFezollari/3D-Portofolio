import { useGLTF } from "@react-three/drei";
import { TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'

export default function Room(){
    // useFrame((state) => {
    //     console.log(state.camera.rotation)
    // })
    const texture = useLoader(TextureLoader,'./bakedRoom.jpg')
    texture.flipY = false
    const {nodes} = useGLTF('./room.glb')
    return( 
        <mesh geometry={nodes.baked.geometry}>
            
            <meshBasicMaterial map={texture}></meshBasicMaterial>
        </mesh>)
    
}