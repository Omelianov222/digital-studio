'use client'

import { useEffect, useRef } from 'react'
import styles from './About.module.css'

export default function About() {
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
      <section className={styles.about} id="about">
         <h2 className={`${styles.sectionTitle} ${styles.observe}`}>ПРО НАС</h2>
         <div className={`${styles.aboutContent} ${styles.observe}`}>
            <p className={styles.aboutText}>
               Ми — команда професіоналів, які{' '}
               <span className={styles.highlight}>
                  об'єднують креатив та технології
               </span>{' '}
               для створення digital-продуктів, що приносять реальні результати
               вашому бізнесу.
            </p>
         </div>
      </section>
   )
}
