import { useState } from 'react'
import './App.css'
import {Profile} from "./components/Profile.jsx";
import {CreateEvents} from "./components/CreateEvent.jsx";
import {Search} from "./components/Search.jsx";
import {NavigationBar} from "./components/NavigationBar.jsx";
import {MainPage} from "./pages/MainPage.jsx";

function App() {

  return (
    <>
      <div>
         <MainPage />
          <Search />

      </div>
    </>
  )
}

export default App
