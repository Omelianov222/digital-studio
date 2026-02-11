'use client'

import { useEffect, useRef } from 'react'
import styles from './Services.module.css'

const services = [
   {
      number: '01',
      name: 'РОЗРОБКА САЙТІВ',
      title: 'Design & Development',
      items: [
         'Landing Pages',
         'Corporate Websites',
         'E-commerce',
         'Web Applications',
         'UI/UX Design',
         'Responsive Design',
      ],
   },
   {
      number: '02',
      name: 'SEO ПРОСУВАННЯ',
      title: 'Search Optimization',
      items: [
         'Technical Audit',
         'On-Page SEO',
         'Content Strategy',
         'Link Building',
         'Analytics & Reports',
         'Keyword Research',
      ],
   },
   {
      number: '03',
      name: 'PPC РЕКЛАМА',
      title: 'Paid Advertising',
      items: [
         'Google Ads',
         'Facebook Ads',
         'Instagram Campaigns',
         'Remarketing',
         'A/B Testing',
         'Campaign Analytics',
      ],
   },
]

export default function Services() {
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
      <section className={styles.services} id="services">

         <div className={styles.servicesContainer}>
            {services.map((service, index) => (
               <div key={service.number}>
                  <div className={`${styles.serviceCard} ${styles.observe}`}>
                     {/* Neon accent line */}
                     <div className={styles.neonLine}></div>

                     {/* Left side - number and title */}
                     <div className={styles.serviceLeft}>
                        <div className={styles.serviceNumber}>{service.number}</div>
                        <div className={styles.serviceInfo}>
                           <h3 className={styles.serviceName}>{service.name}</h3>
                           <h4 className={styles.serviceTitle}>{service.title}</h4>
                        </div>
                     </div>

                     {/* Right side - services list */}
                     <div className={styles.serviceRight}>
                        <ul className={styles.serviceList}>
                           {service.items.map((item, idx) => (
                              <li key={idx} className={styles.serviceListItem}>
                                 <span className={styles.arrow}>→</span>
                                 <span>{item}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>

                  {/* Divider between services */}
                  {index < services.length - 1 && (
                     <div className={`${styles.divider} ${styles.observe}`}>
                        <svg
                           viewBox="0 0 1200 60"
                           preserveAspectRatio="none"
                           className={styles.dividerSvg}
                        >
                           <path
                              d="M0,30 Q300,10 600,30 T1200,30"
                              stroke="url(#gradient)"
                              strokeWidth="2"
                              fill="none"
                           />

                        </svg>
                     </div>
                  )}
               </div>
            ))}
         </div>
      </section>
   )
}
