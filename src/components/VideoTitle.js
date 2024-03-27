import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div>
      <h1 className='my-4 text-4xl font-bold'>{title}</h1>
      <p className='mx-4'>{overview}</p>
      <div className='flex font-semibold'>
        <span>Play</span>
        <span>Details</span>
      </div>
    </div>
  )
}

export default VideoTitle
