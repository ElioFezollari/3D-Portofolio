import { useContext } from "react";
import { popUpContext } from "../ContainerWrapper";

const PopUp = () => {
  const [popUpInfo, setPopUpInfo] = useContext(popUpContext);
  console.log(popUpInfo);
  return (
    popUpInfo && (
      <div className="hello-there" style={{ backgroundColor: popUpInfo.color }}>
        <div className="header-div">
          <h2>{popUpInfo.title}</h2>
          <button onClick={()=>setPopUpInfo(null)} className="close-button">X</button>
        </div>
      </div>
    )
  );
};
export default PopUp;
