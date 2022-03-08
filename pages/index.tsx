import Head from 'next/head'
import Login from '../components/login'
import { useMoralis } from 'react-moralis'
import Header from '../components/header'
import Messages from '../components/messages'

export default function Home() {
  const { isAuthenticated, logout } = useMoralis()

  if (!isAuthenticated) return <Login />

  return (
    <div className="h-screen overflow-hidden overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900">
      <Head>
        <title>Metaverse</title>
      </Head>
      <p>You are authenticated</p>

      <div className="mx-auto max-w-screen-xl">
        {/* Header */}
        <Header />
        {/* Messages */}
        <Messages />
      </div>

      {/* <button onClick={logout}>Logout</button> */}
    </div>
  )
}
