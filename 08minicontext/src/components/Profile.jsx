import React, { useContext } from 'react'
import UserContext from '../context/UserContext.js'



function Profile() {
  const {user} = useContext(UserContext);

  if(!user) return <h1>Not Logged In</h1>
  return (
    <div>
      <h3>Profile: {user.username}</h3>
    </div>
  )
}

export default Profile