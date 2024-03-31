import React from 'react'
import {image_cdn_url} from "../utils/constant/Constant"

const MovieCards = ({posterPath}) => {
  return (
    <div className='w-48 pr-8'> 
      <img alt='Movie Card' src={image_cdn_url+posterPath}/>
    </div>
  )
}

export default MovieCards
