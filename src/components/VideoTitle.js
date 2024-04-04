import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const VideoTitle = ({title,overview}) => {

  return (
    <div className='w-screen aspect-video absolute text-white bg-gradient-to-r from-black px-24 pt-[15%]'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='py-8 text-lg w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-50'>▶️ Play</button>
        <button className='mx-2 bg-gray-500 text-white p-4 px-12 text-xl rounded-lg bg-opacity-50'>
        <FontAwesomeIcon icon={faCircleInfo} size='lg' className='px-2' />
          More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
