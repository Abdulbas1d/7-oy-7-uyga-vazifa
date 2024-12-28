import React from 'react'
import './index.css'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
        <div className="header_container">
            <h2>Logo</h2>

            <div className="homeworks">
                <NavLink className="link" to="/">Homework One</NavLink>
                <NavLink className="link" to="/homeworkTwo">Homework Two</NavLink>
                <NavLink className="link" to="/homeworkThree">Homework Three</NavLink>
                <NavLink className="link" to="/homeworkFour">Homework Four</NavLink>
                <NavLink className="link" to="/homeworkFive">Homework Five</NavLink>
            </div>
        </div>
    </header>
  )
}

export default Header
