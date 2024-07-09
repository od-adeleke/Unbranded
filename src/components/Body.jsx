import React from 'react'
import LeftBody from './LeftBody'
import RightBody from './RightBody'
import '../styles/body.css'

const Body = () => {
  return (
    <div className='body-container'>
        <LeftBody />
        <RightBody />
    </div>
  )
}

export default Body