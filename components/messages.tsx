import React, { useRef } from 'react'
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis'
import Message from './message'
import SendMessage from './send-message'

export default function Messages() {
  const { user } = useMoralis()
  const endOfMessageRef = useRef(null)
  const { data, error, isLoading } = useMoralisQuery(
    'Messages',
    (query) =>
      query
        .ascending('createdAt')
        .greaterThan('createdAt', new Date(Date.now() - 1000 * 60 * 15)),
    [],
    {
      live: true,
    }
  )

  console.log('Data : ', data)

  return (
    <div className="pb-60">
      <div className="mt-4">
        <ByMoralis
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
          variant="dark"
        />
      </div>

      {/* Messages */}
      <div>
        {data.map((_message, index) => (
          <Message key={_message.id} message={_message} />
        ))}
        {/* 
        {data.map((_message, index) => (
          <Message key={index} message={_message} />
        ))}

        {data.map((_message, index) => (
          <Message key={index} message={_message} />
        ))}

        {data.map((_message, index) => (
          <Message key={index} message={_message} />
        ))} */}
      </div>

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
