import { Text, useCursor } from "@react-three/drei";
import { useContext, useState } from "react";
import indicatorData from "../../Data/indicatorMeshData.json";
import { popUpContext } from "../ContainerWrapper";
const Indicators = () => {
  const [popUpInfo,setPopUpInfo] = useContext(popUpContext)
  const [openModal, setOpenModal] = useState({
    modalState: false,
    index: null,
  });

  const handleInfoModal = (modalState, index) => {
    setOpenModal({ modalState, index });
  };

  useCursor(openModal.modalState);
  return (
    <>
      {indicatorData.map(({ textPosition, textRotation, meshPosition,size =1}, index) => (
        <mesh
        key={index}
        onPointerEnter={() => handleInfoModal(true, index)}
        onClick={()=>setPopUpInfo(indicatorData[index].popUp)}
        onPointerLeave={() => handleInfoModal(false, null)}
        position={meshPosition}
        scale={[0.02 * size, 0.02 * size, 0.02 * size] }
      >
          <sphereGeometry />
          <meshBasicMaterial
            color={`${openModal.index == index ? `#839c94` : `#50635D`}`}
          />
          <Text
            position={textPosition}
            rotation={textRotation}
            fontSize={1}
            color="#FFFFFF"
            anchorX="center"
            anchorY="center"
          >
            &lt;/&gt;
          </Text>
        </mesh>
      ))}
    </>
  );
};

export default Indicators;
