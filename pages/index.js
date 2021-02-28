import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>henlit.se</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.highlight}>henlit.se</span>
        </h1>

        <p className={styles.description}>
          I like to code things.
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>Upcoming project</h3>
            <p>A supercool project will be here...</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Upcoming project</h3>
            <p>A supercool project will be here...</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Upcoming project</h3>
            <p>A supercool project will be here...</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Upcoming project</h3>
            <p>A supercool project will be here...</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <div>Yeah, I know I just modded next.js default theme... will design something some day.</div>
      </footer>
    </div>
  )
}
