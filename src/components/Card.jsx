import React from 'react'

const Card = ({cardObj}) => {
  return (
    <li className="card">
        <div className="card-image">
            <img src={cardObj.pp} alt="" />
        </div>
    </li>
  )
}

export default Card