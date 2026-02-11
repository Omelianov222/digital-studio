'use client'

import { useEffect, useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
   const [isVisible, setIsVisible] = useState(true)
   const [lastScrollTop, setLastScrollTop] = useState(0)

   useEffect(() => {
      // Show header at the beginning


      const handleScroll = () => {
         const scrollTop = window.pageYOffset || document.documentElement.scrollTop
         const isAtTop = scrollTop < 100

         if (scrollTop < lastScrollTop || isAtTop) {
            // Scrolling up or at top
            setIsVisible(true)
         } else {
            // Scrolling down
            setIsVisible(false)
         }

         setLastScrollTop(scrollTop)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
   }, [lastScrollTop])

   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
         target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
   }

   return (
      <header className={`${styles.header} ${isVisible ? styles.visible : ''}`}>
         <nav className={styles.nav}>
            <div className={styles.logo}>STUDIO</div>
            <ul className={styles.navLinks}>
               <li>
                  <a href="/">Головна</a>
               </li>
               <li>
                  <a href="/portfolio">Портфоліо</a>
               </li>
               <li>
                  <a href="/services" >
                     Послуги
                  </a>
               </li>
               <li>
                  <a href="#about" onClick={(e) => handleClick(e, '#about')}>
                     Про нас
                  </a>
               </li>
               <li>
                  <a href="#contact" onClick={(e) => handleClick(e, '#contact')}>
                     Контакти
                  </a>
               </li>
            </ul>
         </nav>
      </header >
   )
}