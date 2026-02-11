'use client'

import { useEffect, useRef } from 'react'
import styles from './Stats.module.css'

const stats = [
  { number: '150+', label: 'Проєктів реалізовано' },
  { number: '98%', label: 'Задоволених клієнтів' },
  { number: '5+', label: 'Років досвіду' },
]

export default function Stats() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    const elements = document.querySelectorAll(`.${styles.observe}`)
    elements.forEach((el) => observerRef.current?.observe(el))

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return (
    <section className={styles.stats}>
      {stats.map((stat, index) => (
        <div key={index} className={`${styles.statItem} ${styles.observe}`}>
          <div className={styles.statNumber}>{stat.number}</div>
          <div className={styles.statLabel}>{stat.label}</div>
        </div>
      ))}
    </section>
  )
}
