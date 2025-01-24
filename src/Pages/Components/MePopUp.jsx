import Me from '../../../public/images/Me.jpeg'
const MePopUp = ({ popUpInfo, setPopUpInfo }) => {
  return (
    <div className="me-pop-up">
      <button onClick={() => setPopUpInfo(null)} className="close-button">
        X
      </button>
      <div className="about-me-wrapper">
        <div className='gradient-header'>
        <img src={Me} alt="" />
        </div>
        <div className='about-me-content'>
        <h2>{popUpInfo.title}</h2>
        <p>
          Hello, I'm Elio! As an enthusiastic undergraduate developer and
          student, I have a deep passion for innovation and problem-solving. My
          skill set includes a diverse range of programming languages and tools,
          such as HTML, CSS, JavaScript, React, Git, and more. You might already
          be familiar with these from the previous part of this project! I love building things! My
          experience primarily revolves around web applications, and I'm
          currently putting the finishing touches on my first version of this 3D
          web project. Following that, I'm excited to explore mobile app design
          in greater depth. In addition to web development, I enjoy tinkering
          with electronic boards like Arduino and Raspberry Pi. While these are
          the technologies I'm most comfortable with, I thrive on learning and
          dissecting everything I encounter. My goal is to not only understand
          concepts but also apply them creatively in my work. This website
          exemplifies that journey. Inspired by a stunning 3D site I discovered
          about a year ago, I dove headfirst into learning all the tools used to
          create it, gaining insights into computer graphics and web design
          along the way. Thank you for taking the time to read about my journey!
        </p>
      </div>
    </div></div>
  );
};
export default MePopUp;
