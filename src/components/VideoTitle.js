import React from 'react'

const VideoTitle = ({title,overview}) => {

  return (
    <div className='w-screen aspect-video absolute text-white bg-gradient-to-r from-black px-24 pt-[15%]'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='py-8 text-lg w-1/4'>{overview}</p>
      <div className=''>
        {/* <span>Play</span> */}
        {/* <span>Details</span> */}
        <button className='bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-50'>▶️ Play</button>
        <button className='mx-2 bg-gray-500 text-white p-4 px-12 text-xl rounded-lg bg-opacity-50'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
