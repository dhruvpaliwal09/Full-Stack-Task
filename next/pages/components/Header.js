import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <div className='h-30 bg-black text-white text-xl flex justify-between items-center '>
<div className='font-bold ml-20'>
    <h2 className='text-4xl text-center'>M o v i e s</h2>
</div>  
<div className='bg-white text-black mr-20 px-7 py-3 rounded-2xl font-semibold flex space-x-3 hover:bg-black hover:text-white'>
<button className='hover:text-3xl'>Log in</button>
<span>|</span>
<Link href="/Signup"><button className='hover:text-3xl'>Sign Up</button></Link>
</div>
</div>
    </>
  )
}

export default Header