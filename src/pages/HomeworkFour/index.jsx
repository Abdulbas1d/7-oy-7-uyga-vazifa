import React from 'react'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { setColor } from '../../store/chooseColorSlice'

function HomeworkFour() {
  const color = useSelector(state => state.color.color)
  const dispatch = useDispatch()

  function handleChangeColor(e) {
    dispatch(setColor(e.target.value))
  }

  return (
    <div className='container-four'>
      <h2>Rangni tanlang:</h2>
      <input onChange={handleChangeColor} type="color" />

      <div className="box" style={{backgroundColor: color}}></div>
    </div>
  )
}

export default HomeworkFour
