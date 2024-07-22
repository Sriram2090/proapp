import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUp from './SignUp/SignUp'
import SignIn from './SignIn/SignIn'

import Forgot from './Forgot/Forgot'
import Loader from './Loader/Loader'
import Home3 from './Home3/Home3'
const App = () => {
  return ( 
    <div>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp/>}>
        </Route>
        <Route path="/SignIn" element={<SignIn/>}></Route>
        <Route path="/Forgot" element={<Forgot/>}></Route>
        <Route path='/Loader' element={<Loader/>}></Route>
        <Route path="/Home3" element={<Home3/>}></Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App