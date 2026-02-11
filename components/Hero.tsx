'use client'

import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
   const [titleVisible, setTitleVisible] = useState(false)
   const [subtitleVisible, setSubtitleVisible] = useState(false)

   useEffect(() => {
      setTimeout(() => setTitleVisible(true), 300)
      setTimeout(() => setSubtitleVisible(true), 500)
   }, [])

   return (
      <section className={styles.hero}>
         <div className={styles.heroContent}>
            <h1 className={titleVisible ? styles.visible : ''}>
               <span style={{
                  color: 'transparent',
                  WebkitTextStroke: '1px #ffffffff',
                  marginLeft: "-30%"
               }}>
                  DIGITAL
               </span>

               <br />
               <span style={{

                  marginRight: "-30%"
               }}>
                  STUDIO
               </span>
            </h1>
            <p className={subtitleVisible ? styles.visible : ''}>
               Створюємо цифрові продукти майбутнього
            </p>
         </div>

      </section>
   )
}
