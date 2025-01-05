import React from 'react'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLanguage } from '../../store/textSlice'

function HomeworkThree() {
  const textData = useSelector(state => state.text)
  const dispatch = useDispatch()

  return (
    <div className='container-three'>
      <h2 className='subject'>Fanlar haqida</h2>
      <div className="news">
        <div className="new">
          <h2>Fizika fani haqida:</h2>
          <p><strong>Fizika —</strong> {textData.fizika}</p>
          <button onClick={() => dispatch(toggleLanguage())} className="submit">Change</button>
        </div>

        <div className="new">
          <h2>Algebra fani haqida:</h2>
          <p><strong>Algebra —</strong> {textData.algebra}</p>
          <button onClick={() => dispatch(toggleLanguage())} className="submit">Change</button>
        </div>

        <div className="new">
          <h2>Tarix fani haqida:</h2>
          <p><strong>Tarix —</strong> {textData.tarix}</p>
          <button onClick={() => dispatch(toggleLanguage())} className="submit">Change</button>
        </div>
      </div>
    </div>
  )
}

export default HomeworkThree
