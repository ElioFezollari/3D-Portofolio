import { useContext } from "react";
import { popUpContext } from "../ContainerWrapper";

const PopUp = () => {
  const [popUpInfo, setPopUpInfo] = useContext(popUpContext);
  console.log(popUpInfo);
  return (
    popUpInfo && (
      <div className="pop-up" style={{ backgroundColor: popUpInfo.color }}>
      <button onClick={()=>setPopUpInfo(null)} className="close-button">X</button>
        <div className="image-div"></div>
        <div className="image-container">
          <img src={`/images/indicator_images/${popUpInfo.img}`} alt="" />
        </div>
        <div className="content-container"></div>
      </div>
    )
  );
};
export default PopUp;
