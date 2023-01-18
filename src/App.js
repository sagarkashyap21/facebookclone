import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Friends from './Component/Friends'
import Bell from './Component/Bell'
import Message from './Component/Message'
import Shop from './Component/Shop'

export default function App() {
  return (
    <>
    <Navbar />
<Router>
  <Routes>
    <Route exact path="/" element={<Home />}/>
    <Route exact path="/friends" element={<Friends />}/>
    <Route exact path="/bell" element={<Bell />}/>
    <Route exact path="/shop" element={<Shop />}/>
    <Route exact path="/message" element={<Message />}/>
  </Routes>
  </Router>
   </>
  )
}
