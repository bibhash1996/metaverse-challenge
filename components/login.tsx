import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'

export default function Login() {
  const { authenticate } = useMoralis()

  return (
    <div className="relative bg-black ">
      <div className="absolute z-10 flex h-4/6 w-full flex-col items-center justify-center space-y-4">
        <Image
          className="rounded-full object-cover"
          src="https://avatars.dicebear.com/api/adventurer/bibhash.svg"
          height={200}
          width={200}
        />
        <button
          className="animate-pulse rounded-lg bg-yellow-500 p-5 font-bold"
          onClick={() => {
            authenticate()
          }}
        >
          Login to metaverse
        </button>
      </div>
      <div className="h-screen w-full">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}
