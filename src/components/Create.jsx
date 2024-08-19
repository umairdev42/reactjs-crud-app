import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


function Create() {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')

  const nevigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://668f9eebc0a7969efd98ad73.mockapi.io/reac-crud', {
      name,
      age,
      email,
    }).then(() => {
      nevigate('/')
    })
  }


  return (
    <>
      <div className="form-container">
        <Link to='/'>
          <button>Read Data</button>
        </Link>
        <form onSubmit={handleSubmit}>
          <div>
            <h1>Add Credentials</h1>
          </div>
          <div>
            <label>Name:</label>
            <input type="text" required placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Age:</label>
            <input type="number" required placeholder='Enter Age' onChange={(e) => setAge(e.target.value)} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" required placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <input type="submit" value='Submit' />
        </form>

      </div>
    </>
  )
}

export default Create
