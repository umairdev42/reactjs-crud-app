import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Update() {

    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

    const nevigate = useNavigate()


    useEffect(() => {
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setAge(localStorage.getItem('age'))
        setEmail(localStorage.getItem('email'))
    }, [])

    function handleUpdate(e) {
        e.preventDefault()
        axios.put(`https://668f9eebc0a7969efd98ad73.mockapi.io/reac-crud/${id}`, {
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
                    <button>Read Data</button>/
                </Link>
                <form onSubmit={handleUpdate}>
                    <div>
                        <h1>Update Credentials</h1>
                    </div>
                    <div>
                        <label>Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder='Enter Name' />
                    </div>
                    <div>
                        <label>Age:</label>
                        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required placeholder='Enter Age' />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Enter email' />
                    </div>
                    <input type="submit" value='Update' />
                </form>

            </div>
        </>
    )
}

export default Update
