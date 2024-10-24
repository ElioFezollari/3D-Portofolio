import { useContext, useEffect } from "react";
import { popUpContext } from "../ContainerWrapper";
import ProjectPopUp from "../Components/ProjectPopUp";
import BookPopUp from "../Components/BookPopUp";
import MePopUp from "../Components/MePopUp";

const PopUp = () => {
  const [popUpInfo, setPopUpInfo, setWheelEnabled,currentProject] = useContext(popUpContext);

  useEffect(() => {
    if (popUpInfo) {
      setWheelEnabled(false);
    } else {
      setWheelEnabled(true);
    }
  }, [popUpInfo]);

  if (!popUpInfo) return null;

  return (
    <>
      {popUpInfo.title === "Projects" && (
        <ProjectPopUp setPopUpInfo={setPopUpInfo} popUpInfo={popUpInfo} currentProject={currentProject}/>
      )}

      {popUpInfo.title === "About Me" && (
        <MePopUp popUpInfo={popUpInfo} setPopUpInfo={setPopUpInfo}/>
      )}

      {popUpInfo.title !== "Projects" && popUpInfo.title !== "About Me" && (
        <BookPopUp popUpInfo={popUpInfo} setPopUpInfo={setPopUpInfo}/>
      )}
    </>
  );
};

export default PopUp;
