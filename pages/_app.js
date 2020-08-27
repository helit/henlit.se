import Head from 'next/head'
import '../styles/globals.css'
import styles from '../styles/App.module.css'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

function App({ Component, pageProps }) {
  return(
    <div>
      <Head>
        <title>Henrik Littke - Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Open+Sans" />
      </Head>

      <Nav />

      <div className={styles.container}>
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>

        <Footer />
      </div>
    </div>
  )

  //return <Component {...pageProps} />
}

export default App
