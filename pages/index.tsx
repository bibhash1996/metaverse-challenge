import Head from 'next/head'
import Login from '../components/login'
import { useMoralis } from 'react-moralis'

export default function Home() {
  const { isAuthenticated, logout } = useMoralis()

  return (
    <div>
      <Head>
        <title>Metaverse</title>
      </Head>
      {isAuthenticated ? (
        <>
          {' '}
          <p>You are authenticated</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}
