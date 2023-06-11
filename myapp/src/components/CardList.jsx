import React from 'react'

const CardList = ({data}) => {
  return (
    <div className='user-list'>
        <div className='picture'>
            <img src={data.picture.large} alt="" />
        </div>
      
        <div className='p-2'>
            <div ><span className='pe-1 '>Full Name:</span><span>{data.name.first}</span> <span>{data.name.last}</span></div>
            <div><span>Gender:</span> <span className='t'>{data.gender}</span></div>
            <div><span>Phone Number:</span> <span>{data.phone}</span></div>
            <div><span>Mail:</span> <span>{data.email}</span></div>
            <div><span>{data.location.country}</span> | <span>{data.location.city}</span></div>
        </div>
       
      
    </div>
  )
}

export default CardList