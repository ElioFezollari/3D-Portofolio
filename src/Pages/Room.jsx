import { useGLTF } from "@react-three/drei";
import { TextureLoader } from 'three'

import {useFrame, useLoader } from '@react-three/fiber'
import BookImages from "./Additions/BookImages";
import { sRGBEncoding } from "@react-three/drei/helpers/deprecated";
import RoomAdditions from "./RoomAdditions";

export default function Room(){
    const texture = useLoader(TextureLoader,'./bakedRoom4.jpg')
    texture.flipY = false
    texture.colorSpace=sRGBEncoding
    const {nodes} = useGLTF('./Room4.glb')
    console.log(nodes.scene)

    return( 
        <>
        <mesh rotation={[0,3.14*1.5,0]} geometry={nodes.baked.geometry}>
            <meshBasicMaterial map={texture} toneMapped={false} ></meshBasicMaterial>
        </mesh>

        <RoomAdditions/>
        </>

    )

}