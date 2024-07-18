import React from 'react'
import { IoIosSend } from "react-icons/io";

const MessageInput = () => {
  return (
    <div className='flex gap-2'>
        <input type="text" className='input w-full text-xl focus:outline-none' />
        <button className='btn btn-primary px-2'><IoIosSend size={40} color='white' /></button>
    </div>
  )
}

export default MessageInput