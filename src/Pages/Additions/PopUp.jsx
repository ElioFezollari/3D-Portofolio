import { Html } from "@react-three/drei";
import popUpsData from '../../Data/indicatorMeshData.json';

const PopUp = ({ index,setIndexHovered}) => {
  return (
    <>
      {popUpsData.map((popUpData, i) => {
        return popUpData.popUp && i === index ? ( 
          <Html key={i} position={popUpData.popUp.coordinate}>
            <div className={`parent-div ${index !== null ? 'visible' : ''}`} style={{backgroundColor:popUpData.popUp.color,width:`${popUpData.popUp.width}px`,height:`${popUpData.popUp.height}px`,opacity:popUpData.popUp.opacity}}>
              <p className="text">{popUpData.popUp.text}</p>
              <button className="close-button" onClick={()=>setIndexHovered(null)}>X</button>
            </div>
          </Html>
        ) : null;
      })}
    </>
  );
};

export default PopUp;
