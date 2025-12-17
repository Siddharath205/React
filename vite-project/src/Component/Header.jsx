import React from 'react'
import { IoMenu } from "react-icons/io5";

function Header() {
  return (
    <div className='bg-[#a3d154] flex justify-between items-center p-4'>
        <img src="/vite.svg" alt=""width={20} height={20} />
        <ul  className='flex space-x-4'>
            <li>home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
        </ul>
        <div>
            <button className='text-3xl  font-semibold italic text-teal-600 '>Login</button>
            <button>Sign up</button>
        </div>
        <IoMenu />
    </div>
  )
}

export default Header