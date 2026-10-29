import React from 'react'

const Footer = () => {
    return (
        <div className='bg-purple-200 flex flex-col justify-center items-center w-full'>
            <div className="logo font-bold text-2xl ">
                <span className='text-purple-500'> &lt;</span>

                <span>Pass</span><span className='text-purple-800'>Byte/&gt;</span>


            </div>
            <div className='flex justify-center items-center'> Created with <img className='w-7 mx-2' src="icons/heart.png" alt="" /> for you.  </div>
        </div>
    )
}

export default Footer