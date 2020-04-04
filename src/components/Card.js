import React from 'react'

const Card = ( {id = 0, name = "Random", username = "randomeuser", email = "noemail"}) => (
  <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
    <img src={`https://robohash.org/${name}`} 
      width="150"
      height="150"
      alt="Robots" 
    />
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  </div>
)

export default Card