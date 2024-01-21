import React from 'react'
import logo from "../Assets/Frame 45.svg"
import carticon from "../Assets/tdesign_cart.svg"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="flex justify-between py-[20px] px-[45px] align-top bg-black  ">
        <div><img src={logo} alt="logo" /></div>
        <div className='flex items-center'>
        <Link to='/cart'>
        <img src={carticon} alt="cart" />
        </Link>
        </div>
    </div>
  )
}
