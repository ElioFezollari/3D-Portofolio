import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import PCamera from "./PCamera"
import { useState } from "react"

const ContainerWrapper = () =>{

    const [wheelDirection,setWheelDirection] = useState('')


    
    const wheelTurned = (e) =>{
        if(e.deltaY>0){
            setWheelDirection('down')
        }
        if(e.deltaY<0){
            setWheelDirection('up')
        }
        console.log(wheelDirection)
    }

    return(
        <div className="big-div" onWheel={e=>wheelTurned(e)}>
        <Canvas >
    
            <Experience />
            <PCamera/>
        </Canvas>
        </div>
    )
}
export default ContainerWrapper