import React from 'react'
import "./portfolio.scss"

export default function Portfolio() {
  const list = [
    {
      id: "overview",
      title: "Overview"
    },
    {
      id: "education",
      title: "Education"
    },
    {
      id: "hobbies",
      title: "Hobbies"
    },
  ];
  return (
    <div className='portfolio' id='portfolio'>
      <h1>About</h1>
      <ul>
        <li className='active'>Overview</li>
        <li>Education</li>
        <li>Hobbies</li>
      </ul>
      <div className="container">
        <div className="itemLeft">
          <p>Hello! I'm Praneeth and I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. This passion leads me to challenge myself daily and learn new skills that help me do better work.I am a web-developer who believes in the magical realm of web-developing and the spells you can cast upon your user through the website, every website has a story to tell and i'm here to tell the story and hopefully connect with my user so that the both of us can get the most out of the website.</p>
        </div>
        <div className="itemRight">
          <img src="assets/About.png" alt="" className="" />
        </div>
      </div>
    </div>
  )
}
