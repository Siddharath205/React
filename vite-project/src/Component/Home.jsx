import React from 'react'

function Main() {
  return (
    <>
    <div className='text-lg sm:text-xl md:text-2xl lg:text-4xl text-fuchsia-500'>This is Main</div>
    <div className='flex flex-wrap justify-center mx-auto gap-5'>
   {
    Array.from({length:5}).map((_,index)=>(
      <div key={index} className='w-64 bg-linear-to-r from-purple-400 via-pink-500 to-red-500 p-4 rounded-lg space-y-4'>
        <img src="/vite.svg" className='w-full h-24' alt="" />
        <p className='text-zinc-800 font-semibold'>Blog of Developer</p>
        <p className='text-base text-zinc-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe numquam earum ipsam unde assumenda, rem voluptatum est dolores voluptates harum!</p>
      </div>
    ))}
    </div>
   
    </>
  )
}

export default Main