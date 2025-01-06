import React, { useState } from 'react'
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { add, deleteUser, edit } from '../../store/userSlice'

function HomeworkFive() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [editId, setEditId] = useState(null)
  const users = useSelector(state => state.user.users)
  const dispatch = useDispatch()

  function validate() {
    if (!name) {
      alert("Iltimos ismingizni kiriting!")
      return false
    }

    if (name.length < 3) {
      alert("Ism eng kamida 3 ta harfdan iborat bo'lishi kerak!")
      return false
    }

    if (!email) {
      alert("Email addresingizni kiriting!")
      return false
    }

    if (!email.endsWith(`@gmail.com`)) {
      alert(`Email addresingizni oxiri "@gmail.com" bilan tugashi kerak!`)
      return false
    }

    return true
  }

  function handleAddUser(event) {
    event.preventDefault()

    let isValid = validate()
    if (!isValid) {
      return
    }

    if (editId) {
      dispatch(edit({ id: editId, name, email }))
    } else {
      let user = {
        id: Date.now(),
        name: name,
        email: email
      }

      dispatch(add(user))
    }

    setName("");
    setEmail("")
    setEditId(null)
  }

  function handleEdit(id, name, email) {
    setEditId(id)
    setName(name)
    setEmail(email)
  }

  return (
    <div className='container-five'>
      <form onSubmit={handleAddUser} className="form">
        <h2>Foydanaluvchi ma'lumotlari:</h2>
        <label htmlFor="name">Ismingizni kiriting!</label>
        <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" name="name" id="name" placeholder='Enter your name...' />

        <label htmlFor="email">Email Adresingiz kiriting!</label>
        <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" name="email" id="email" placeholder='Enter your email address...' />

        <button type='submit' className='btnAdd'>{editId ? "Tahrir qilish" : "Qo'shish"}</button>
      </form>

      <h2 className='user'>Foydalanuvchilar Ro'yxati:</h2>

      <div className="datas">
        {users.map(user => (
          <div key={user.id} className="data">
            <p><strong>Name:</strong>{" "} {user.name}</p>
            <p><strong>Email:</strong>{" "} {user.email}</p>

            <div className="btns">
              <button onClick={() => handleEdit(user.id, user.name, user.email)} className="edit">Edit</button>
              <button onClick={() => dispatch(deleteUser(user.id))} className="delete">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeworkFive
