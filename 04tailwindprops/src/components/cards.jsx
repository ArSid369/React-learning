import React from 'react'
import PropTypes from 'prop-types'

function cards({username= 'Spiderman',post= 'Avengers',superhero= false,}) {
  return (
    <div>
        <img className='max-h-screen w-auto' src="https://images.pexels.com/photos/33424924/pexels-photo-33424924.jpeg" alt=""  />
        <h1 className='text-2xl bg-green-300 p-3 rounded-lg'>A card for photos, made by {username}</h1>
        <p>
            Hello this is {username} from {post} 
            {superhero ? ' and I am a superhero' : ' and I am not a superhero'}
        </p>
    </div>
  )
}

cards.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  post: PropTypes.bool,
  arr: PropTypes.arrayOf(PropTypes.number),
  obj: PropTypes.object,
}

cards.defaultProps = {
    username: 'Spiderman',
    post: 'Avengers',
    superhero: false,
}

export default cards;