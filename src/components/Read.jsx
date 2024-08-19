import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Read() {

  const [apiData, setApiData] = useState([])

  function getData() {
    axios.get('https://668f9eebc0a7969efd98ad73.mockapi.io/reac-crud')
      .then((response) => {
        setApiData(response.data)
      })
  }

  function handleDelete(id) {
    axios.delete(`https://668f9eebc0a7969efd98ad73.mockapi.io/reac-crud/${id}`)
      .then(() => {
        getData()
      })
  }

  function setDataToStorage(id, name, age, email){
    localStorage.setItem('id', id)
    localStorage.setItem('name', name)
    localStorage.setItem('age', age)
    localStorage.setItem('email', email)
  }


  useEffect(() => {
    getData()
  }, [])



  return (
    <>
      <div className="create-btn">
        <Link to='/create'>
          <button>Create New Data</button>
        </Link>
      </div>

      <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              apiData.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.email}</td>
                    <td>
                      <Link to='/update'>
                        <button onClick={() => setDataToStorage(item.id, item.name, item.age, item.email)}>Update</button>
                      </Link>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Read