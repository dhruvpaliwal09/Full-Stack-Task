import React from 'react'
import Moviecard from '../components/Moviecard'


const index = () => {
  return (
    <>
    <div className='text-3xl font-bold flex justify-center mt-5'>IMDB's Top 250 movies</div>
    <div className='flex mt-10'>
    <Moviecard/>
    </div>
    </>
  )
}

export default index