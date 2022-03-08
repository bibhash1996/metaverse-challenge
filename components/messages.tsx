import React, { useRef } from 'react'
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis'
import SendMessage from './send-message'

export default function Messages() {
  const { user } = useMoralis()
  const endOfMessageRef = useRef(null)

  return (
    <div className="pb-60">
      <div className="mt-4">
        <ByMoralis
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
          variant="dark"
        ></ByMoralis>
      </div>

      {/* Messages */}
      <div></div>

      {/* Send message */}
      <div className="flex justify-center">
        <SendMessage endOfMessageRef={endOfMessageRef} />
      </div>

      <div ref={endOfMessageRef} className="mt-5 text-center text-gray-400">
        <p>You are upto date {user?.getUsername()}</p>
      </div>
    </div>
  )
}
