import { useGLTF } from "@react-three/drei";
import { TextureLoader } from 'three'

import {useFrame, useLoader } from '@react-three/fiber'
import BookImages from "./Additions/BookImages";
import { sRGBEncoding } from "@react-three/drei/helpers/deprecated";
import RoomAdditions from "./RoomAdditions";

export default function Room(){
    useFrame((state) => {
        // console.log(state.camera.rotation)
        // console.log(state.camera.position)
    })
    const texture = useLoader(TextureLoader,'./bakedRoom.jpg')
    texture.flipY = false
    texture.colorSpace=sRGBEncoding
    const {nodes} = useGLTF('./room.glb')

    return( 
        <>
        <mesh geometry={nodes.baked.geometry}>
            <meshBasicMaterial map={texture} toneMapped={false} ></meshBasicMaterial>
        </mesh>

        <RoomAdditions/>
        </>

    )

}