import React from 'react'
import ChatBox from '../chatComponents/ChatBox'
import MessageInput from '../chatComponents/MessageInput'

const Chat = () => {
  return (
    <div className='flex flex-col h-full py-2'>
      <ChatBox />
      <MessageInput />
    </div>
  )
}

export default Chat