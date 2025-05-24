import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-slate-800 px-8 py-3'>
        <a href='/' className='text-white font-bold'>Web</a>
        <a href="/addTopic" className='px-3 py-2 bg-white'>Add Topic</a>
    </div>
  )
}
