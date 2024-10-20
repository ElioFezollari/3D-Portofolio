import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import React from "react"
import { useState } from "react"
import PCamera from "./Entities/PCamera"
import PopUp from "./Additions/PopUp"

export const popUpContext = React.createContext()

const ContainerWrapper = () =>{
    const [popUpInfo,setPopUpInfo] = useState() 
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
        <popUpContext.Provider value={[popUpInfo,setPopUpInfo]}>
        <Canvas linear flat>
            <Experience />
            <PCamera wheelDirection={wheelDirection} setWheelDirection={setWheelDirection} wheelEnabled={wheelEnabled} setWheelEnabled={setWheelEnabled} />
        </Canvas>
        <PopUp/>
        </popUpContext.Provider>
        </div>
    )
}
export default ContainerWrapper