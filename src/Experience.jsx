import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Room from './Room'
export default function Experience()
{
    return <>

        <Perf position="top-left" />
        
        <Room/>

    </>
}