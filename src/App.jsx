import { Route, Routes } from 'react-router-dom'
import Landing from './view/Landing/Landing'
import Home from './view/Home/Home'
import './app.css'
function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
  )
}

export default App
