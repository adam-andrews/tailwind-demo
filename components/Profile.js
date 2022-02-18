import React from 'react'
import Image from 'next/image'
import wolf from "../images/download.jpeg"

function Profile() {
  return (
    <div className={`flex flex-col text-center sm:flex-row sm:items-center sm:mx-auto
      ${false && "animate-pulse"} transition duration-100 transform hover:scale-110`}>
			<Image className="w-full sm:w-1/2 sm:rounded-full sm:max-w-sm" src={wolf} />
      <div className='mt-5 sm:ml-5'>
      <h1>Adam Andrews</h1>
      <h2>I code</h2>
      </div>
      </div>
  )
}

export default Profile