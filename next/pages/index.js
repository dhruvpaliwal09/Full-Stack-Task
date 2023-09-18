import React from 'react'
import Moviecard from './components/Moviecard'
import Footer from './components/Footer'
import Topmovie from './components/Topmovie'
import Topshow from './components/Topshow'
const index = () => {
  return (
    <>
      <div className="bg-gray-800 m-7 rounded-xl p-3 h-15">
        <ul className="flex text-center justify-around font-semibold py-3 text-xl ">
          <li className="text-white"><a href="/Movie">Movie</a></li>
          <li className="text-white"><a href="/Rating">Rating</a></li>
          <li className="text-white"><a href="/Show">Shows</a></li>
          <li className="text-white"><a href="">Trending</a></li>
        </ul>
      </div>
      
      
      
      <div className='bg-green-100 mb-6 mx-8 rounded-xl'>
        <div className='rounded-xl'>
          <div className='flex justify-end items-center'>
            <h1 className="text-4xl font-bold ml-9  fontNew">Your Gateway to Cinematic Excellence: Discover, Rate, Discuss!</h1>
            <img src='https://e0.pxfuel.com/wallpapers/442/396/desktop-wallpaper-film-posters-collage-movies-resolution.jpg' className='w-auto h-auto rounded-xl' />
          </div>
        </div>
      </div>
      <div className=''>
      <hr className='border-t border-gray-800 mt-10 mx-12 font-extrabold'/>
      </div>
      <h1 className='text-4xl font-semibold flex justify-center py-10'>Top 12 best movies of all time</h1>
      <Topmovie/>
      <h1 className='text-4xl font-semibold flex justify-center py-10'> Top 12 best Show of all time</h1>
      <Topshow/>
    </>
  )
}

export default index