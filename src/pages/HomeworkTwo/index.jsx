import React from 'react'
import './index.css'
import LightModePicture from '../../assets/images/light-icon.png'
import DarkModePicture from '../../assets/images/dark-icon.png'
import PizzaPicture from '../../assets/images/pizza-picture.jpg'

function HomeworkTwo() {
  return (
    <div className='container-two'>
      <div className="logo">
        <h3>LOGO</h3>
        <div className="data">
          <a href="/homeworkTwo">Home</a>
          <a href="/homeworkTwo">About</a>
          <a href="/homeworkTwo">Contact</a>
        </div>

        <img className='lightOrdark' src={LightModePicture} alt="" />
        <span>Light Mode</span>
      </div>

      <div className="cards">
        <div className="card">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomeworkTwo
