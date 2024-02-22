import React from 'react'
import Home from './pages/Home'
import Play from './pages/Play'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
<Routes>

<Route path='/' element={<Home/>} ></Route>
<Route path='/play' element={<Play/>} ></Route>

</Routes>

</BrowserRouter>
  )
}

export default App