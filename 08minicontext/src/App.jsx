import { useState } from 'react'
import './App.css'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import UserContextProvider from './context/UserContextProvider.jsx'

function App() {

  return (
    <UserContextProvider>
      <h2>context API in React</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
