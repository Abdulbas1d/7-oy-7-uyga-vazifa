import React from 'react'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeColors } from '../../store/changeColorSlice'

function HomeworkOne() {
    const changeColor = useSelector(state => state.changeColor.value)
    const dispatch = useDispatch()

    function handleChangeColor() {
        dispatch(changeColor({ value: "blue" }))
    }

  return (
    <div className='container_Color'>
      <h2>1. Tasodifiy rang generatorini boshqarish</h2>

      <div className="containerForColor"></div>

      <button onClick={handleChangeColor} className="btnOne">Change Color</button>
    </div>
  )
}

export default HomeworkOne
