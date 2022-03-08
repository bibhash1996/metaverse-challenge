import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'

export default function Avatar(props: {
  userName: string
  logoutOnPress: boolean
}) {
  const { user, logout } = useMoralis()

  return (
    <Image
      className="cursor-pointer rounded-full bg-black hover:opacity-75"
      src={`https://avatars.dicebear.com/api/pixel-art/${
        props.userName || user?.get('username')
      }.svg`}
      layout="fill"
      onClick={() => props.logoutOnPress && logout()}
    />
  )
}
