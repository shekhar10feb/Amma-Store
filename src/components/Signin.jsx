import React from 'react'

export const Signin = () => {
  return (
    <div className='w-full flex justify-center items-center flex-col py-16'>
      <h2 className='w-[90%] text-white text-base font-bold p-2 my-2'>SignIn here...</h2>
      <form action="" method="post" className='w-[90%] flex justify-center items-center flex-col border border-white rounded-md py-4'>
        <input type="text" placeholder='Enter your email...' className='w-[90%] bg-white p-2 my-2 border border-white rounded-sm' />
        <input type="text" placeholder='Enter your password...' className='w-[90%] bg-white p-2 my-2 border border-white rounded-sm' />
        <button type="submit" className='w-[90%] bg-blue-700 text-white p-2 my-2 border-none rounded-sm'>SignIn</button>
      </form>
    </div>
  )
}
