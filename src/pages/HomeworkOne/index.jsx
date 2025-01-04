import React from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeColors } from '../../store/changeColorSlice';

function HomeworkOne() {
  const changeColor = useSelector((state) => state.changeColor.value);
  const dispatch = useDispatch();

  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'grey', "darkgreen", "orange", 'pink'];

  function handleChangeColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    dispatch(changeColors(randomColor));
  }

  return (
    <div className="container_Color">
      <h2>1. Tasodifiy rang generatorini boshqarish</h2>
      <div className="containerForColor" style={{ backgroundColor: changeColor }}></div>
      <button onClick={handleChangeColor} className="btnOne">Change Color</button>
    </div>
  );
}

export default HomeworkOne;