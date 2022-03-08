import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'
import Avatar from './avatar'
import ChangeUserName from './change-username'

export default function Header() {
  const { user } = useMoralis()

  return (
    <div className="text-pink-500">
      <div className="">
        <div className="relative mx-auto hidden h-24 w-24 lg:inline-grid">
          <Image
            className="rounded-full"
            src={`https://avatars.dicebear.com/api/pixel-art/bibhash.svg`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* Avatar */}
        <div>
          <div className="relative h-48 w-48 rounded-full border-8 border-pink-500 lg:mx-auto">
            <Avatar logoutOnPress userName={''} />
          </div>

          <h1 className="text-3xl">Welcome to metaverse</h1>
          <h2 className="truncate text-5xl font-bold">{user?.getUsername()}</h2>

          <ChangeUserName />
        </div>
      </div>
    </div>
  )
}
