import React from 'react'
import GPTSearchbar from './GPTSearchbar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { movieSuggestions2 } from '../utils/constant/Constant'

const GPTSearch = () => {


  return (
    <div >
      <div className='absolute -z-10'>
      <img
        className="h-screen object-cover"
          src={movieSuggestions2}
          alt="suggestion-logo"
        />
      </div>
      <GPTSearchbar/>
      <GPTMovieSuggestion/>
    </div>
  )
}

export default GPTSearch
