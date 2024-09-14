import { useState } from 'react'
import './App.css'
import {Profile} from "./components/Profile.jsx";
import {CreateEvents} from "./components/CreateEvent.jsx";
import {NavigationBar} from "./components/NavigationBar.jsx";
import {MainPage} from "./pages/MainPage.jsx";

function App() {

  return (
    <>
      <div>
         <MainPage />

      </div>
    </>
  )
}

export default App
