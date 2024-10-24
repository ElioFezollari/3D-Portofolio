const BookPopUp = ({popUpInfo,setPopUpInfo}) =>{
    return(
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
    )
}
export default BookPopUp