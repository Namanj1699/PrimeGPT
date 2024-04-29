import React from 'react'
import { image_cdn_url } from '../utils/constant/Constant'

const CrewCards = ({profile_path,name}) => {
    if(profile_path)
    return (
    <div>
      <div className='w-48 pr-8'> 
      <img alt='Movie Card' src={image_cdn_url+profile_path}/>
      <span className='text-white'>{name}</span>
    </div>
    </div>
  )
}

export default CrewCards
