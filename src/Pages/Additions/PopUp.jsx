import { useContext, useEffect } from "react";
import { popUpContext } from "../ContainerWrapper";

const PopUp = () => {
  const [popUpInfo, setPopUpInfo,setWheelEnabled] = useContext(popUpContext);

  useEffect(()=>{
    if(popUpInfo){
      setWheelEnabled(false)
    }
    else{
      setWheelEnabled(true)
    }
  },[popUpInfo])

  if (!popUpInfo) return null;

  return (
    <>
      {popUpInfo.title === "Projects" && (
        <div
          className="project-pop-up"
          style={{ backgroundColor: popUpInfo.color }}
        >
          <button onClick={() => setPopUpInfo(null)} className="close-button">
            X
          </button>
          <div className="project-wrapper-div">
            <h1>{popUpInfo.projects[0].title}</h1>
            <div className="project-wrapper-body">
              <p>
                <b>Description:</b> {popUpInfo.projects[0].description}
              </p>
              <div className="project-images">
                <b>Images:</b>
                {popUpInfo.projects[0].img.map((image, index) => (
                  <div key={index} className="project-image-card">
                    <img
                      src={`/images/indicator_images/${image.name}`}
                      alt={image.description}
                    />
                    <p>{image.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {popUpInfo.title === "Me" && <h1>Hi</h1>}

      {popUpInfo.title !== "Projects" && popUpInfo.title !== "Me" && (
        <div className="pop-up" style={{ backgroundColor: popUpInfo.color }}>
          <button onClick={() => setPopUpInfo(null)} className="close-button">
            X
          </button>
          <div className="image-div"></div>
          <div className="main-content-div">
            <div className="image-container">
              <img
                src={`/images/indicator_images/${popUpInfo.img}`}
                alt={popUpInfo.imgAlt}
              />
            </div>
            <div className="text-container">
              <h1>{popUpInfo.title}</h1>
              <div className="pop-up-info">
                <p>
                  <b>Description:</b> {popUpInfo.description}
                </p>
                <p>
                  <b>Years of Experience:</b> {popUpInfo.yoe}
                </p>
                <p>
                  <b>A few of my skills:</b> {popUpInfo.skills}
                </p>
                {popUpInfo.ecosystem && (
                  <>
                    <div className="ecosystem-header">
                      <p>
                        <b>Some related technologies I'm proficient in:</b>
                      </p>
                    </div>
                    <div className="ecosystem-div">
                      {popUpInfo.ecosystem.map((tech, index) => (
                        <img
                          key={index}
                          src={`/images/indicator_images/${tech.img}`}
                          alt={tech.alt}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUp;
