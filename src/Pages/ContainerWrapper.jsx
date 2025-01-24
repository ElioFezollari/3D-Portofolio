import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import React, { useState } from "react";
import PCamera from "./Entities/PCamera";
import PopUp from "./Additions/PopUp";

export const popUpContext = React.createContext();

const ContainerWrapper = () => {
    const [currentProject, setCurrentProject] = useState(0);
    const [popUpInfo, setPopUpInfo] = useState();
    const [wheelDirection, setWheelDirection] = useState("none");
    const [wheelEnabled, setWheelEnabled] = useState(true);
    const [touchStartY, setTouchStartY] = useState(0); 

    const wheelTurned = (e) => {
        e.preventDefault();
        if (wheelEnabled) {
            if (e.deltaY > 0) {
                setWheelDirection("down");
            } else if (e.deltaY < 0) {
                setWheelDirection("up");
            }
        }
    };

    const handleTouchStart = (e) => {
        setTouchStartY(e.touches[0].clientY); 
    };

    const handleTouchMove = (e) => {
        if (wheelEnabled) {
            const touchEndY = e.touches[0].clientY; 
            if (touchEndY < touchStartY) {
                setWheelDirection("down");
            } else if (touchEndY > touchStartY) {
                setWheelDirection("up");
            }
            setTouchStartY(touchEndY);
        }
    };

    return (
        <div
            className="big-div"
            onWheel={(e) => wheelTurned(e)}
            onTouchStart={(e) => handleTouchStart(e)} 
            onTouchMove={(e) => handleTouchMove(e)} 
        >
            <popUpContext.Provider
                value={[
                    popUpInfo,
                    setPopUpInfo,
                    setWheelEnabled,
                    currentProject,
                    setCurrentProject,
                ]}
            >
                <Canvas linear flat className="canvas">
                    <Experience />
                    <PCamera
                        wheelDirection={wheelDirection}
                        setWheelDirection={setWheelDirection}
                        wheelEnabled={wheelEnabled}
                        setWheelEnabled={setWheelEnabled}
                    />
                </Canvas>
                <PopUp />
            </popUpContext.Provider>
        </div>
    );
};

export default ContainerWrapper;
