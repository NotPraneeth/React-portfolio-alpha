import "./intro.scss";
import Typical from 'react-typical'





export default function Intro() {
  
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/casual-life-3d-boy-sitting-at-the-desk-with-open-book.png" alt="" className="introImg" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello there, I'm</h2>
          <h1>Sai Praneeth</h1>
          <h3>And I'm a <span>
          <Typical
        steps={['Web-developer.', 1000, 'Student.', 1000, 'Weeb.',1000,]}
        loop={Infinity}
        wrapper="span"
      /></span></h3>
        </div>
        <a href='#portfolio'>
          <img src="assets/down.png" alt=""/>
        </a>
      </div>
    </div>
  )
}
