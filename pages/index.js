import Head from 'next/head'
import About from '../components/About/About'
import Contact from '../components/Contact'
import Main from '../components/Main/Main'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Alex Ryan</title>
        <meta name="description" content="Portfolio Website" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Main />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}