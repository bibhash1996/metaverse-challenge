import React from 'react'
import { useMoralis } from 'react-moralis'

export default function ChangeUserName() {
  const { user, setUserData, isUserUpdating, userError } = useMoralis()

  const setUserName = () => {
    const userName = prompt(
      `Enter your new user name. Current ${user?.getUsername()}`
    )
    if (!userName) return
    setUserData({
      username: userName,
    })
  }

  return (
    <div className="absolute top-5 right-5 text-sm">
      <button
        disabled={isUserUpdating}
        className="hover:text-pink-500"
        onClick={setUserName}
      >
        Change your username
      </button>
    </div>
  )
}
