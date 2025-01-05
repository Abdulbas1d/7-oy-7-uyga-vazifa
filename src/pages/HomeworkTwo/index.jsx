import React from 'react'
import './index.css'
import LightModePicture from '../../assets/images/light-icon.png'
import DarkModePicture from '../../assets/images/dark-icon.png'
import PizzaPicture from '../../assets/images/pizza-picture.jpg'
import HamburgerPicture from '../../assets/images/hamburger-picture.jpg'
import CakePicture from '../../assets/images/cake-picture.jpg'
import ChizburgerPicture from '../../assets/images/chizburger-picture.jpg'
import SandwichPicture from '../../assets/images/sandwich-picture.jpg'
import SushiPicture from '../../assets/images/sushi-picture.jpeg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../store/modeSlice'

function HomeworkTwo() {
  const themes = useSelector(state => state.mode.value)
  const dispatch = useDispatch()

  function handleChangeTheme() {
    dispatch(toggleTheme())
  }

  return (
    <div className={`container-two ${themes}`}>
      <div className="logo">
        <h3>LOGO</h3>
        <div className="data">
          <a href="/homeworkTwo">Home</a>
          <a href="/homeworkTwo">About</a>
          <a href="/homeworkTwo">Contact</a>
        </div>

        <button onClick={handleChangeTheme} className='themebtn'>
          <img className='lightOrdark' src={themes === "light" ? LightModePicture : DarkModePicture} alt="" />
          <span>{themes === "light" ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>

      <h1 className='foods'>Foods</h1>
      <div className="cards">
        <div className="card">
          <img src={PizzaPicture} alt="" />
          <h2>Pizza</h2>
          <p><strong>Price:</strong> {" "} $6</p>
          <p><strong>About:</strong>{" "} Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nesciunt non maxime.</p>
        </div>

        <div className="card">
          <img src={HamburgerPicture} alt="" />
          <h2>Hamburger</h2>
          <p><strong>Price:</strong> {" "} $5</p>
          <p><strong>About:</strong>{" "} Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nesciunt non maxime.</p>
        </div>

        <div className="card">
          <img src={ChizburgerPicture} alt="" />
          <h2>Chizburger</h2>
          <p><strong>Price:</strong> {" "} $6</p>
          <p><strong>About:</strong>{" "} Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nesciunt non maxime.</p>
        </div>

        <div className="card">
          <img src={SandwichPicture} alt="" />
          <h2>Sandwich</h2>
          <p><strong>Price:</strong> {" "} $9</p>
          <p><strong>About:</strong>{" "} Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nesciunt non maxime.</p>
        </div>

        <div className="card">
          <img src={SushiPicture} alt="" />
          <h2>Sushi</h2>
          <p><strong>Price:</strong> {" "} $18</p>
          <p><strong>About:</strong>{" "} Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nesciunt non maxime.</p>
        </div>

        <div className="card">
          <img src={CakePicture} alt="" />
          <h2>Cake</h2>
          <p><strong>Price:</strong> {" "} $12</p>
          <p><strong>About:</strong>{" "} Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nesciunt non maxime.</p>
        </div>
      </div>
    </div>
  )
}

export default HomeworkTwo
