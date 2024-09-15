import gsap from "gsap";
import { useEffect } from "react";

const useCameraAnimation = (camera, animationState, wheelDirection, setWheelDirection, setAnimationState, wheelEnabled,setWheelEnabled) => {
    const animationZeroPosition = [-2.8361929451685057, 5.9, 2.0498575431467745];
    const animationZeroRotation = [-1.5707973267351913, 1.4432887733041577e-8, 3.14];
    const animationOnePosition = [-1.4670931555005555, 3.873290827039308, -3.319999068769551];
    const animationOneRotation = [-1.3017331201951894, 1.4613199765544966, 3.14 / 2.42];
    const animationTwoPosition = [-1.4670931555005555, 3.1, -2.85];
    const animationTwoRotation = [-1.3017331201951894, 1.4613199765544966, 3.14 / 2.42];

    const animationPositions = [animationZeroPosition, animationOnePosition, animationTwoPosition];
    const animationRotations = [animationZeroRotation, animationOneRotation, animationTwoRotation];

    const runAnimation = (animationNumber) => {
        gsap.to(camera.position, {
            x: animationPositions[animationNumber][0],
            y: animationPositions[animationNumber][1],
            z: animationPositions[animationNumber][2],
            duration: 2,
            ease: "power1.inOut",
        });

        gsap.to(camera.rotation, {
            x: animationRotations[animationNumber][0],
            y: animationRotations[animationNumber][1],
            z: animationRotations[animationNumber][2],
            duration: 2,
            ease: "power1.inOut",
            onComplete: () => {
                setWheelEnabled(true);
                if (animationState < 2) {
                    setAnimationState(prevState => prevState + 1);
                }
            },
        });
    };

    useEffect(() => {
        if (wheelDirection === "down" && wheelEnabled) {
            setWheelEnabled(false); 
            runAnimation(animationState);
            setWheelDirection('none');
        }
    }, [wheelDirection, animationState, wheelEnabled, setWheelDirection, setWheelEnabled, runAnimation]);
};

export default useCameraAnimation;
