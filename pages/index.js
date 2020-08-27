import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>
        Hello,
      </h1>
      <p>my name is Henrik.</p>

      <p>
        I am a full stack web developer based in Gothenburg, Sweden.
      </p>

      <p>
        Look at me code.
      </p>
      <code className={styles.code}>coolFunction(true)</code>
    </div>
  )
}
