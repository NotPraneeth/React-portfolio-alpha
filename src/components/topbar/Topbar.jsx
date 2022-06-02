import React from 'react'
import "./topbar.scss"
import { Person,Mail} from "@mui/icons-material";
import ReactDOM from 'react-dom';

export default function Topbar({menuOpen,setMenuopen }) {
  return (
    <div className={'topbar ' + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href='#intro' className='logo'>praneeth.</a>
          <div className="itemContainer">
            <Person className='icon'/>
            <span>+91 99025 82689</span>
          </div>
          <div className="itemContainer">
            <Mail className='icon'/>
            <span>rsphaha@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuopen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
    
  )


}

