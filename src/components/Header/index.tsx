import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/vector.png" alt="spacetraveling" />
        <img src="/images/spacetraveling.png"/>
        <img src="/images/png.png"/>
        
        
      </div>
    </header>

  )
}
