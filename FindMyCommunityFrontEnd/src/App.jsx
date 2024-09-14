import { useState } from 'react'
import './App.css'
import {Profile} from "./components/Profile.jsx";
import {CreateEvents} from "./components/CreateEvent.jsx";
import {Search} from "./components/Search.jsx";
import {NavigationBar} from "./components/NavigationBar.jsx";

function App() {

  return (
    <>
      <div>
         <NavigationBar />
          <Profile />
          <CreateEvents />
          <Search />

      </div>
    </>
  )
}

export default App
