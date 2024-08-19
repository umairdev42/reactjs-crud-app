import Create from './components/Create'
import Read from './components/Read'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Update from './components/Update'

function App() {


  return (
    <>
     <Routes>
      <Route path='/' element={<Read />} />
      <Route path='/create' element={<Create />} />
      <Route path='/update' element={<Update />} />
     </Routes>
    </>
  )
}

export default App
