import React from 'react'

const Navbar = () => {
  return (
    <div className='flex font-bold justify-between relative p-10 mix-blend-difference '>
      <div className='fixed left-20'>
        <h1>LOGO</h1>
      </div>
      <div className='flex fixed right-40 gap-20'>
        <h3>WORK</h3>
        <h3>SERVICES</h3>
        <h3>ABOUT</h3>
        <h3>CONTACT</h3>
        <h3>CAREERS</h3>
      </div>
    </div>
  )
}

export default Navbar
