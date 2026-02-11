'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './PortfolioGrid.module.css'
import Link from 'next/link'

const projects = [
   {
      id: 1,
      title: 'TechFlow',
      category: 'Web Development',
      description: 'Платформа для автоматизації бізнес-процесів',
      image: '/images/project1.jpg',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      year: '2024',
   },
   {
      id: 2,
      title: 'EcoMarket',
      category: 'E-commerce',
      description: 'Онлайн-магазин екологічних товарів',
      image: '/images/project2.jpg',
      tags: ['Next.js', 'Stripe', 'MongoDB'],
      year: '2024',
   },
   {
      id: 3,
      title: 'FinanceHub',
      category: 'Fintech',
      description: 'Мобільний додаток для управління фінансами',
      image: '/images/project3.jpg',
      tags: ['React Native', 'Firebase', 'AI'],
      year: '2023',
   },
   {
      id: 4,
      title: 'HealthTrack',
      category: 'Healthcare',
      description: 'Система моніторингу здоров\'я пацієнтів',
      image: '/images/project4.jpg',
      tags: ['Vue.js', 'Python', 'ML'],
      year: '2023',
   },
   {
      id: 5,
      title: 'EduPlatform',
      category: 'Education',
      description: 'Онлайн-платформа для навчання та курсів',
      image: '/images/project5.jpg',
      tags: ['Angular', 'WebRTC', 'AWS'],
      year: '2023',
   },
   {
      id: 6,
      title: 'CreativeStudio',
      category: 'Design',
      description: 'Інструмент для колаборації дизайнерів',
      image: '/images/project6.jpg',
      tags: ['WebGL', 'Socket.io', 'Redis'],
      year: '2024',
   },
]

const categories = ['Всі', 'Web Development', 'E-commerce', 'Fintech', 'Healthcare', 'Education', 'Design']

export default function PortfolioGrid() {
   const [activeCategory, setActiveCategory] = useState('Всі')
   const [filteredProjects, setFilteredProjects] = useState(projects)
   const observerRef = useRef<IntersectionObserver | null>(null)

   useEffect(() => {
      if (activeCategory === 'Всі') {
         setFilteredProjects(projects)
      } else {
         setFilteredProjects(projects.filter(p => p.category === activeCategory))
      }
   }, [activeCategory])

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
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
         }
      )

      const elements = document.querySelectorAll(`.${styles.observe}`)
      elements.forEach((el) => observerRef.current?.observe(el))

      return () => {
         observerRef.current?.disconnect()
      }
   }, [filteredProjects])

   return (
      <section className={styles.portfolioGrid}>
         <div className={styles.container}>
            {/* Filter buttons */}
            <div className={`${styles.filters} ${styles.observe}`}>
               {categories.map((category) => (
                  <button
                     key={category}
                     className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ''
                        }`}
                     onClick={() => setActiveCategory(category)}
                  >
                     {category}
                  </button>
               ))}
            </div>

            {/* Projects grid */}
            <div className={styles.grid}>
               {filteredProjects.map((project, index) => (
                  <Link href={`/portfolio/projectPage`} key={project.id} className={styles.projectLink}>
                     <div
                        key={project.id}
                        className={`${styles.projectCard} ${styles.observe}`}
                        style={{ transitionDelay: `${index * 0.1}s` }}
                     >
                        {/* Image placeholder with gradient */}
                        <div className={styles.projectImage}>
                           <div className={styles.imageOverlay}>
                              <div className={styles.viewProject}>
                                 <span>Переглянути проєкт</span>
                                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                 </svg>
                              </div>
                           </div>
                           <div className={styles.imagePlaceholder}>
                              <div className={styles.gradientBg}></div>
                           </div>
                        </div>

                        {/* Project info */}
                        <div className={styles.projectInfo}>
                           <div className={styles.projectHeader}>
                              <div>
                                 <div className={styles.projectCategory}>{project.category}</div>
                                 <h3 className={styles.projectTitle}>{project.title}</h3>
                              </div>
                              <div className={styles.projectYear}>{project.year}</div>
                           </div>

                           <p className={styles.projectDescription}>{project.description}</p>

                           <div className={styles.projectTags}>
                              {project.tags.map((tag) => (
                                 <span key={tag} className={styles.tag}>
                                    {tag}
                                 </span>
                              ))}
                           </div>
                        </div>

                        {/* Neon accent line */}
                        <div className={styles.cardAccent}></div>
                     </div>
                  </Link>

               ))}
            </div>

            {/* Load more button */}
            <div className={`${styles.loadMore} ${styles.observe}`}>
               <button className={styles.loadMoreBtn}>
                  <span>Завантажити ще</span>
                  <div className={styles.btnGlow}></div>
               </button>
            </div>
         </div>
      </section>
   )
}
