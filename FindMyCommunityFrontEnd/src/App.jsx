import { useState } from 'react'
import './App.css'
import {Profile} from "./components/Profile.jsx";
import {CreateEvents} from "./components/CreateEvent.jsx";


function App() {

  return (
    <>
      <div>
          <Profile />
          <CreateEvents />
      </div>
    </>
  )
}

export default App
