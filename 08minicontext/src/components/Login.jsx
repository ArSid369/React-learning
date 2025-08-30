import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {setUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password});
  }

  return (
    <div>
        <h2>Login</h2>
        <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
        />
        <br></br><br></br>
        <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
        />
        <br></br><br></br>
        <button onClick={handleSubmit}>Login</button>
        <br></br><br></br>
    </div>
  )
}

export default Login