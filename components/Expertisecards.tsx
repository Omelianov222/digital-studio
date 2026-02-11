'use client'

import { useEffect, useRef } from 'react'
import styles from './ExpertiseCards.module.css'

const services = [
   {
      id: 1,
      title: 'DESIGN &',
      titleAccent: 'DEVELOPMENT',
      badge: '✦',
      image: '/images/design-dev.jpg',
      items: [
         { text: 'Інтернет магазин', link: true },
         { text: 'Корпоративний сайт', link: true },
         { text: 'Landing page', link: false },
         { text: 'Кастомний проєкт', link: false },
      ],
      technologies: ['laravel', 'php', 'wordpress', 'shopify', 'react', 'vue'],
   },
   {
      id: 2,
      title: 'SEO',
      titleAccent: '',
      badge: '✦',
      image: '/images/seo.jpg',
      items: [
         { text: 'SEO просування сайту', link: true },
         { text: 'GEO просування', link: true },
         { text: 'SEO аудит сайту', link: true },
         { text: 'SEO супровід сайту', link: true },
      ],
      technologies: ['analytics', 'semrush', 'ahrefs', 'moz', 'search-console', 'tag-manager'],
   },
   {
      id: 3,
      title: 'PPC',
      titleAccent: '',
      badge: '✦',
      image: '/images/ppc.jpg',
      items: [
         { text: 'Контекст Google Ads', link: true },
         { text: 'Товарка Google Shopping', link: true },
         { text: 'Відеореклама Youtube', link: true },
         { text: 'Таргет Meta Ads', link: true },
      ],
      technologies: ['google-ads', 'analytics', 'tag-manager', 'meta'],
   },
]

export default function ExpertiseCards() {
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
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px',
         }
      )

      const elements = document.querySelectorAll(`.${styles.observe}`)
      elements.forEach((el) => observerRef.current?.observe(el))

      return () => {
         observerRef.current?.disconnect()
      }
   }, [])

   return (
      <section className={styles.expertise}>
         <div className={styles.container}>
            {/* Header */}
            <div className={styles.header}>
               <div className={styles.badge}>
                  <span className={styles.badgeIcon}>✦</span>
                  ПОСЛУГИ
               </div>
               <h2 className={`${styles.title} ${styles.observe}`}>
                  <span className={styles.titleAccent}>ПОТУЖНА</span>
                  ЕКСПЕРТИЗА
               </h2>
               <p className={`${styles.subtitle} ${styles.observe}`}>
                  51+ FULL-TIME СПЕЦІАЛІСТ<br />У ШТАТІ КОМПАНІЇ
               </p>
            </div>

            {/* Cards Grid */}
            <div className={styles.cardsGrid}>
               {services.map((service, index) => (
                  <div
                     key={service.id}
                     className={`${styles.card} ${styles.observe}`}
                     style={{ transitionDelay: `${index * 0.15}s` }}
                  >
                     {/* Background Image */}
                     <div className={styles.cardImage}>
                        <div className={styles.imageGradient}></div>
                     </div>

                     {/* Card content */}
                     <div className={styles.cardContent}>
                        {/* Badge */}
                        <div className={styles.cardBadge}>
                           <span className={styles.badgeIcon}>{service.badge}</span>
                        </div>

                        {/* Title */}
                        <h3 className={styles.cardTitle}>
                           {service.title} {service.titleAccent && (
                              <span className={styles.cardTitleAccent}>{service.titleAccent}</span>
                           )}
                        </h3>

                        {/* Services list */}
                        <ul className={styles.servicesList}>
                           {service.items.map((item, idx) => (
                              <li key={idx} className={styles.serviceItem}>
                                 <span className={styles.serviceText}>{item.text}</span>
                                 {item.link && (
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.arrow}>
                                       <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                 )}
                              </li>
                           ))}
                        </ul>

                        {/* Technologies icons */}
                        <div className={styles.techIcons}>
                           {service.technologies.map((tech, idx) => (
                              <div key={idx} className={styles.techIcon}>
                                 <div className={styles.iconPlaceholder}></div>
                              </div>
                           ))}
                        </div>
                     </div>

                     {/* Bottom indicator */}
                     <div className={styles.bottomIndicator}></div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}