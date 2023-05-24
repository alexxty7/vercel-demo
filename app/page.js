import styles from './page.module.css'
import Subdomain from './subdomain'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <Subdomain />
        </p>
      </div>
    </main>
  )
}
