const ProjectPopUp = ({ popUpInfo, setPopUpInfo, currentProject }) => {
  console.log("hi");
  return (
    <div
      className="project-pop-up"
      style={{ backgroundColor: popUpInfo.color }}
    >
      <button onClick={() => setPopUpInfo(null)} className="close-button">
        X
      </button>
      <div className="project-wrapper-div">
        <h1>{popUpInfo.projects[currentProject].title}</h1>
        <div className="project-wrapper-body">
          <p>
            <b>Description:</b> {popUpInfo.projects[currentProject].description}
          </p>
          <div className="project-technologies">
            <p>
              <b>Technologies Used:</b>
            </p>
            <div>
              {popUpInfo.projects[currentProject].technologies.map(
                (tech, index) => (
                  <img
                    key={index}
                    src={`/images/indicator_images/${tech}`}
                    alt={tech.split(".")[0]}
                    className="technology-icon"
                  />
                )
              )}
            </div>
          </div>
          <div className="project-images">
            <b>Images:</b>
            {popUpInfo.projects[currentProject].img.map((image, index) => (
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
  );
};

export default ProjectPopUp;
