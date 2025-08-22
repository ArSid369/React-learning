import { useState } from 'react'


function App() {
  const [color, setColor] = useState('bg-yellow-500')

  return (
    <>
      <div className={`w-screen h-screen ${color} transition-colors duration-500 ease-in-out relative`}>
        {/* Button Container */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-4'>
          <button
            className='rounded-md bg-red-500 shadow-md px-4 py-2 text-white hover:scale-105 transition-transform duration-200'
            onClick={() => setColor('bg-red-500')}
          >
            Red
          </button>
          <button
            className='rounded-md bg-green-500 shadow-md px-4 py-2 text-white hover:scale-105 transition-transform duration-200'
            onClick={() => setColor('bg-green-500')}
          >
            Green
          </button>
          <button
            className='rounded-md bg-blue-500 shadow-md px-4 py-2 text-white hover:scale-105 transition-transform duration-200'
            onClick={() => setColor('bg-blue-500')}
          >
            Blue
          </button>
          <button
            className='rounded-md bg-yellow-500 shadow-md px-4 py-2 text-white hover:scale-105 transition-transform duration-200'
            onClick={() => setColor('bg-yellow-500')}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  )
}

export default App
