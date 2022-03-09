import React from 'react'
import { useMoralis } from 'react-moralis'
import Avatar from './avatar'

export default function Message(props: { message: any }) {
  const { user } = useMoralis()

  const isUserMessage =
    props.message.get('ethAddress') === user?.get('ethAddress')

  return (
    <div
      className={`relative mt-10 flex items-end space-x-2 ${
        isUserMessage && 'justify-end'
      }`}
    >
      <div className={`relative h-8 w-8 ${isUserMessage && 'order-last ml-2'}`}>
        <Avatar
          userName={props.message.get('username')}
          logoutOnPress={false}
        />
      </div>
      <div
        className={`flex space-x-4 rounded-lg p-3 ${
          isUserMessage
            ? 'rounded-br-none bg-pink-300'
            : 'rounded-bl-none bg-blue-400'
        }`}
      >
        <p>{props.message.get('message')}</p>
      </div>

      {/* Time ago */}
      <p
        className={`absolute bottom-5 text-xs ${
          isUserMessage ? 'text-pink-300' : 'text-blue-400'
        }`}
      >
        {props.message.get('username')}
      </p>
    </div>
  )
}
