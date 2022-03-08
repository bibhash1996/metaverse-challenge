import React, { useState } from 'react'
import { useMoralis } from 'react-moralis'

export default function SendMessage(props: { endOfMessageRef: any }) {
  const { user, Moralis } = useMoralis()
  const [message, setMessage] = useState('')

  const sendMessage = (e: any) => {
    e.preventDefault()
    if (!message) return

    const Messages = Moralis.Object.extend('Messages')
    const messages = new Messages()

    messages
      .save({
        message,
        username: user?.getUsername(),
        ethAddress: user?.get('ethAddress'),
      })
      .then((response: any) => {
        console.log('Moralis response: ', response)
      })
      .catch((err: any) => {
        console.log(err.message)
      })

    props.endOfMessageRef.current.scrollIntoView({ behavior: 'smooth' })
    setMessage('')
  }

  return (
    <form className="rounded-4 fixed bottom-10 flex w-11/12 max-w-xl rounded-full border-4 border-blue-400 bg-black px-6 py-4 opacity-80 shadow-xl">
      <input
        className="z-50 flex-grow bg-transparent pr-5 text-white placeholder-green-500 outline-none"
        placeholder={`
      Enter a message ${user?.getUsername()}
      `}
        value={message}
        onChange={(e) => {
          setMessage(e.target.value)
        }}
      />
      <button
        className="fotn-bold text-pink-500"
        type="submit"
        onClick={sendMessage}
      >
        Send
      </button>
    </form>
  )
}
