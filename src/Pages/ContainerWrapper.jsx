import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import { useState } from "react"
import PCamera from "./Entities/PCamera"

const ContainerWrapper = () =>{

    const [wheelDirection,setWheelDirection] = useState('none')
    const [wheelEnabled,setWheelEnabled] = useState(true)
    const wheelTurned = (e) =>{
        if(e.deltaY>0){
            setWheelDirection('down')
        }
        else if(e.deltaY<0){
            setWheelDirection('up')
        }
    }

    return(
        <div className="big-div" onWheel={e=>wheelTurned(e)}>
        <Canvas linear flat>
            <Experience />
            <PCamera wheelDirection={wheelDirection} setWheelDirection={setWheelDirection} wheelEnabled={wheelEnabled} setWheelEnabled={setWheelEnabled} />
        </Canvas>
        </div>
    )
}
export default ContainerWrapper