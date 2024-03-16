import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog'
import Publish from './pages/Publish'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/blog/:id' element={<Blog/>}/>
          <Route path='/' element={<Publish/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
