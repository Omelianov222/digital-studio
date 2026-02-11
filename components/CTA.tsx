'use client'

import { useEffect, useRef } from 'react'
import styles from './CTA.module.css'

export default function CTA() {
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
    <section className={styles.cta} id="contact">
      <h2 className={`${styles.ctaTitle} ${styles.observe}`}>
        ГОТОВІ
        <br />
        РОЗПОЧАТИ?
      </h2>
      <a href="#" className={`${styles.ctaButton} ${styles.observe}`}>
        Зв'язатися з нами
      </a>
    </section>
  )
}
