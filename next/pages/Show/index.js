import React from 'react'
import Showcard from '../components/Showcard'
const showdetail = () => {
  return (
    <>
    <div className='text-3xl font-bold flex justify-center mt-5'>Top 250 shows on IMDB</div>
    <div className='flex mt-12'>
    <Showcard/>
    </div>
    </>

  )
}

export default showdetail