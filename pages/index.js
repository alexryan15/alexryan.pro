import Head from 'next/head'
import Main from '../components/Main/Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alex Ryan</title>
        <meta name="description" content="Portfolio Website" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Main />
    </div>
  )
}