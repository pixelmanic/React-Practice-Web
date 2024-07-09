import React from 'react'


export default function Navbar() {
  const name = "khalil"
  const likes = 39;
  const nums = [1,2,3,4,5,6];
  const objets = {
    name: "person"
  }
  const link = "http://localhost:3001/"
  return (
    <div>
      <h1>{name}</h1>
      <p className='likes'>{likes}</p>
      <p>{nums}</p>
      <a href={link} target='_blank'>YouTube</a>
    </div>
  )
}
