import { Text, useCursor } from "@react-three/drei";
import { useState } from "react";
import meshData from "../../Data/indicatorMeshData.json";

const Indicators = () => {
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
      {meshData.map(({ textPosition, textRotation, meshPosition }, index) => (
        <mesh
        key={index}
        onPointerEnter={() => handleInfoModal(true, index)}
        onPointerLeave={() => handleInfoModal(false, null)}
        position={meshPosition}
        scale={[0.02, 0.02, 0.02]}
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
