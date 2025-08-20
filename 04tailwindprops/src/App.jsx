import { useState } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import Card from './components/cards.jsx'

function App() {
  let myArr = [1,2,3,4,5]

  return (
    <>
      <h1 className='text-3xl bg-green-300 p-3 rounded-lg'>Vite with Tailwind</h1>
      <Card username='Argyadeep' post='Fresher'/>
      <Card arr={myArr} superhero={true}/>
    </>
  )
}


export default App
