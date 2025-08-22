import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
      let pass = "";
      let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const numbers = "0123456789";
      const chars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

      if(numberAllowed) letters += numbers;
      if(charAllowed) letters += chars;

      for(let i=0; i<length; i++) {
        //choose random letter
        const char = Math.floor(Math.random() * letters.length+1)
        // add to password, char is the index for letter string
        pass += letters.charAt(char);
      }
      setPassword(pass);
    },
      [length, numberAllowed, charAllowed]
  );

  useEffect(() => {
    generatePassword();
  },
    [length, numberAllowed, charAllowed,]
  )

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-blue-300 text-white">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            value={password}
            className='outline-none text-black p-2 w-96'
            placeholder='Password'
            readOnly
            ref = {passwordRef}
          />
          <button 
            onClick={() => {
              navigator.clipboard.writeText(password);
              passwordRef.current?.select();
            }}
            className='outline-none bg-blue-700 hover:bg-blue-400 hover:shadow-md cursor-pointer text-white px-3 py-0.5 shrink-0'
          >
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type='range'
              min = {4}
              max = {32}
              value = {length}
              className='curson-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <span>Length: {length}</span>
            <input 
              type='checkbox'
              defaultChecked = {numberAllowed}
              onChange = {() => {
                  setNumberAllowed((prev) => !prev)
                }
              }
            />
            <span>Numbers</span>
            <input 
              type='checkbox'
              defaultChecked = {charAllowed}
              onChange = {() => {
                setCharAllowed(() => !charAllowed)
              }}
            />
            <span>Chars</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
