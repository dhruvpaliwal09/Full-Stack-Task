import React from 'react'
import FaInstagram from 'react-icons'
import RiTwitterXLine from 'react-icons'
const Footer = () => {
  return (
    <div className="footer bg-gray-800 text-white mt-10">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold pb-4 flex">M o v i e s</p>
        <ul className="flex space-x-4">
          {/* <img width="24" height="24" src="https://img.icons8.com/ios/24/instagram-new--v1.png" alt="instagram-new--v1" /> */}
          <FaInstagram/>
        <RiTwitterXLine/>
          <img width="24" height="24" src="https://img.icons8.com/glyph-neue/24/youtube-play.png" alt="youtube-play" className="hidden sm:block" />
          <img width="24" height="24" src="https://img.icons8.com/ios-glyphs/24/share--v1.png" alt="share--v1" className="hidden sm:block" />
        </ul>
      </div>
      <div>
        <ul className="flex justify-between items-center">
          <li className="hidden sm:block">Terms and Conditions</li>
          <li>Contact us</li>
          <li className="hidden sm:block">Shipping and return policy</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      <div className="pt-4 flex flex-col items-center justify-center">
        <p>Stay connected with us!!</p>
      </div>
    </div>
  )
}

export default Footer