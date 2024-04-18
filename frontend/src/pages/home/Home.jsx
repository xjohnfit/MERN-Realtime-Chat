import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='flex h-[100%] w-[100%] rounded-lg overflow-hidden bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}

export default Home
