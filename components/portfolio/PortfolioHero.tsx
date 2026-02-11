'use client'

import { useEffect, useState } from 'react'
import styles from './PortfolioHero.module.css'

export default function PortfolioHero() {
  const [titleVisible, setTitleVisible] = useState(false)
  const [subtitleVisible, setSubtitleVisible] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setTitleVisible(true), 300)
    setTimeout(() => setSubtitleVisible(true), 600)
    setTimeout(() => setStatsVisible(true), 900)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        {/* Main title */}
        <div className={styles.titleWrapper}>
          <h1 className={titleVisible ? styles.visible : ''}>ПОРТФОЛІО</h1>
          <div className={styles.neonAccent}></div>
        </div>

        {/* Subtitle */}
        <p className={`${styles.subtitle} ${subtitleVisible ? styles.visible : ''}`}>
          Проєкти, які змінюють бізнеси та надихають майбутнє
        </p>

        {/* Stats */}
        <div className={`${styles.stats} ${statsVisible ? styles.visible : ''}`}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>150+</div>
            <div className={styles.statLabel}>Проєктів</div>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>50+</div>
            <div className={styles.statLabel}>Клієнтів</div>
          </div>
          <div className={styles.statDivider}></div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>98%</div>
            <div className={styles.statLabel}>Задоволення</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`${styles.scrollIndicator} ${statsVisible ? styles.visible : ''}`}>
          <div className={styles.scrollLine}></div>
          <span>Прокрутіть вниз</span>
        </div>
      </div>

      {/* Decorative elements */}
      <div className={styles.decorGrid}></div>
      <div className={styles.decorCircle}></div>
    </section>
  )
}
