import Head from 'next/head'
import Image from 'next/image'
import User from '../container/User'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux NEXT JS</title>
        <meta name="description" content="Tutorial Redux Next JS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <User />
      </main>
    </div>
  )
}
