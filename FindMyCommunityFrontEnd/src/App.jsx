import { useState } from 'react'
import './App.css'
import {Profile} from "./components/Profile.jsx";
import {CreateEvents} from "./components/CreateEvent.jsx";
import {Search} from "./components/Search.jsx";


function App() {

  return (
    <>
      <div>
          <Profile />
          <CreateEvents />
          <Search />
      </div>
    </>
  )
}

export default App
