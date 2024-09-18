import gsap from "gsap";
import { useEffect } from "react";

const useCameraAnimation = (camera, animationState, wheelDirection, setWheelDirection, setAnimationState, wheelEnabled,setWheelEnabled) => {
    const animationZeroPosition = [-2.8361929451685057, 5.9, 2.0498575431467745];
    const animationZeroRotation = [-1.5707973267351913, 1.4432887733041577e-8, 3.14];
    const animationOnePosition = [-1.4670931555005555, 3.873290827039308, -3.319999068769551];
    const animationOneRotation = [-1.3017331201951894, 1.4613199765544966, 3.14 / 2.42];
    const animationTwoPosition = [-1.4670931555005555, 3.1, -2.85];
    const animationTwoRotation = [-1.3017331201951894, 1.4613199765544966, 3.14 / 2.42];
    const animationThreePosition = [-3.298823500891904, 2.275358373401949, -1.1507952294949377]
    const animationThreeRotation = [-0.05048752409358442, 0.001999546639527374, 0.00010103795436500205]
    const animationFourPosition = [-2.75, 1.5, -1.1507952294949377]
    const animationFourRotation = [-0.05048752409358442, 0.001999546639527374, 0.00010103795436500205]
    const animationFivePosition = [-3.298823500891904, 0.65, -1.1507952294949377]
    const animationFiveRotation = [-0.05048752409358442, 0.001999546639527374, 0.00010103795436500205]

    const animationPositions = [animationZeroPosition, animationOnePosition, animationTwoPosition,animationThreePosition,animationFourPosition,animationFivePosition];
    const animationRotations = [animationZeroRotation, animationOneRotation, animationTwoRotation,animationThreeRotation,animationFourRotation,animationFiveRotation];

    const runAnimation = (animationNumber,isUp=false) => {
        if(isUp && animationNumber == -1 || !isUp && animationNumber == animationPositions.length){
            setWheelEnabled(true);
            console.log('here')
            return
        }
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
                if (!isUp && animationState < 5) {
                    setAnimationState(prevState => prevState + 1);
                    console.log(animationState)
                }
                else{
                    setAnimationState(prevState => prevState - 1);
                    console.log(animationState)
                }
            },
        });
    };

    useEffect(() => {
        if (wheelDirection === "down" && wheelEnabled) {
            setWheelEnabled(false); 
            runAnimation(animationState+1);
            setWheelDirection('none');
        }
        else if (wheelDirection === "up" && wheelEnabled) {
            setWheelEnabled(false); 
            runAnimation(animationState-1,true);
            setWheelDirection('none');
        }
    }, [wheelDirection, animationState, wheelEnabled, setWheelDirection, setWheelEnabled, runAnimation]);
};

export default useCameraAnimation;
