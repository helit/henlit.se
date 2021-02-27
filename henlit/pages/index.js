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
          Welcome to <span className={styles.highlight}>henlit.se</span>
        </h1>

        <p className={styles.description}>
          I like to code things...
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>Project 1</h3>
            <p>Click to go to project 1.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Project 2</h3>
            <p>Click to go to project 2.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Project 3</h3>
            <p>Click to go to project 3.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Project 4</h3>
            <p>Click to go to project 4</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
