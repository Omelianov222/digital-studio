"use client"
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useEffect, useRef } from 'react';
import "@/components/projectPage.module.css"

export default function PortfolioCase() {
   const scrollRef = useRef(null);

   useEffect(() => {
      const scrollContainer = scrollRef.current;
      if (!scrollContainer) return;

      let animationId;
      let position = 0;

      const animate = () => {
         position += 0.5;
         if (scrollContainer.firstElementChild) {
            const itemWidth = scrollContainer.firstElementChild.offsetWidth;
            if (position >= itemWidth) {
               position = 0;
            }
            scrollContainer.style.transform = `translateX(-${position}px)`;
         }
         animationId = requestAnimationFrame(animate);
      };

      animationId = requestAnimationFrame(animate);

      return () => {
         if (animationId) {
            cancelAnimationFrame(animationId);
         }
      };
   }, []);

   const categories = [
      'Веб-дизайн',
      'UX/UI',
      'Брендинг',
      'Фінтех',
      'Мобільний додаток'
   ];

   const blocks = [
      {
         type: 'image',
         src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
         alt: 'Dashboard screenshot'
      },
      {
         type: 'text',
         title: 'Виклик',
         content: 'ТАСКОМБАНК звернувся до нас з потребою створити сучасний веб-сайт, який би відображав інноваційний підхід банку до цифрових послуг. Основною метою було створити платформу, яка б поєднувала зручність використання з сучасним дизайном та високою функціональністю.'
      },
      {
         type: 'text',
         title: 'Рішення',
         content: 'Ми розробили комплексну стратегію цифрової присутності, яка включала редизайн веб-сайту, створення інтуїтивної навігації та оптимізацію користувацького досвіду. Особливу увагу приділили мобільній версії, оскільки значна частина користувачів здійснює банківські операції з мобільних пристроїв.'
      },
      {
         type: 'image',
         src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
         alt: 'Analytics view'
      },
      {
         type: 'image',
         src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
         alt: 'Mobile app interface'
      },
      {
         type: 'text',
         title: 'Результати',
         content: 'Новий веб-сайт ТАСКОМБАНК отримав високі оцінки як від клієнтів, так і від індустрії. Час завантаження сторінок зменшився на 40%, а показник відмов знизився на 25%. Мобільна версія показала зростання конверсії на 35%, що підтвердило правильність обраної стратегії.'
      },
      {
         type: 'text',
         title: 'Технології',
         content: 'У проекті ми використали найсучасніші технології: React для інтерфейсу, Node.js для серверної частини, PostgreSQL для бази даних. Впровадили систему дизайну на базі Figma, що дозволило забезпечити консистентність всіх елементів на платформі.'
      },
      {
         type: 'image',
         src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
         alt: 'Design system'
      }
   ];

   const styles = {

      container: {
         minHeight: '100vh',
         backgroundColor: '#000',
         color: '#ffffffff',
      },
      scrollWrapper: {
         overflow: 'hidden',
         borderBottom: '1px solid #27272a',
         padding: '60px 0'
      },
      scrollContainer: {
         display: 'flex',
         whiteSpace: 'nowrap',
         willChange: 'transform'
      },
      scrollTitle: {
         fontSize: '120px',
         fontWeight: 'bold',
         padding: '0 40px',
         WebkitTextStroke: '1px antiquewhite',
         color: 'transparent',
         letterSpacing: '-0.02em',
      },
      content: {
         maxWidth: '1280px',
         margin: '0 auto',
         padding: '80px 24px'
      },
      hero: {
         display: 'grid',
         gridTemplateColumns: '1fr 1fr',
         gap: '64px',
         marginBottom: '128px'
      },
      heroTitle: {
         fontSize: '48px',
         fontWeight: 'bold',
         marginBottom: '32px',
         lineHeight: '1.1'
      },
      heroText: {
         fontSize: '20px',
         color: '#a1a1aa',
         lineHeight: '1.7'
      },
      categoriesLabel: {
         fontSize: '12px',
         fontWeight: '600',
         color: '#71717a',
         marginBottom: '16px',
         textTransform: 'uppercase',
         letterSpacing: '0.1em'
      },
      categoriesWrapper: {
         display: 'flex',
         flexWrap: 'wrap',
         gap: '12px',
         marginBottom: '32px'
      },
      categoryTag: {
         padding: '12px 24px',
         backgroundColor: '#18181b',
         border: '1px solid #27272a',
         borderRadius: '9999px',
         fontSize: '14px',
         transition: 'background-color 0.3s',
         cursor: 'default'
      },
      detailsGrid: {
         display: 'grid',
         gridTemplateColumns: '1fr 1fr',
         gap: '32px',
         marginTop: '48px'
      },
      detailLabel: {
         fontSize: '12px',
         fontWeight: '600',
         color: '#71717a',
         marginBottom: '8px',
         textTransform: 'uppercase',
         letterSpacing: '0.1em'
      },
      detailValue: {
         fontSize: '18px'
      },
      grid: {
         display: 'grid',
         gridTemplateColumns: '1fr 1fr',
         gap: '32px'
      },
      imageBlock: {
         aspectRatio: '16 / 9',
         backgroundColor: '#18181b',
         borderRadius: '16px',
         overflow: 'hidden'
      },
      image: {
         width: '100%',
         height: '100%',
         objectFit: 'cover',
         transition: 'transform 0.7s'
      },
      textBlock: {
         backgroundColor: '#18181b',
         border: '1px solid #27272a',
         borderRadius: '16px',
         padding: '48px',
         display: 'flex',
         flexDirection: 'column',
         justifyContent: 'center',
         transition: 'background-color 0.3s'
      },
      textBlockTitle: {
         fontSize: '28px',
         fontWeight: 'bold',
         marginBottom: '24px'
      },
      textBlockContent: {
         fontSize: '18px',
         color: '#a1a1aa',
         lineHeight: '1.7'
      },
      cta: {
         marginTop: '128px',
         textAlign: 'center'
      },
      ctaTitle: {
         fontSize: '48px',
         fontWeight: 'bold',
         marginBottom: '24px'
      },
      ctaText: {
         fontSize: '20px',
         color: '#a1a1aa',
         marginBottom: '48px'
      },
      button: {
         display: 'inline-flex',
         alignItems: 'center',
         gap: '12px',
         backgroundColor: '#fff',
         color: '#000',
         padding: '20px 40px',
         borderRadius: '9999px',
         fontSize: '18px',
         fontWeight: '600',
         border: 'none',
         cursor: 'pointer',
         transition: 'background-color 0.3s'
      }
   };

   return (
      <>
         <Header />
         <div style={styles.container}>
            {/* Infinite Scroll Title */}
            <div style={styles.scrollWrapper}>
               <div ref={scrollRef} style={styles.scrollContainer}>
                  {[...Array(10)].map((_, i) => (
                     <h1 key={i} style={styles.scrollTitle}>
                        ДНЕПРОВЕС
                     </h1>
                  ))}
               </div>
            </div>

            {/* Category Block */}
            <div style={styles.content}>
               <div style={styles.hero}>
                  <div>
                     <h2 style={styles.heroTitle}>
                        Редизайн веб-сайту для провідного фінтех-банку
                     </h2>
                     <p style={styles.heroText}>
                        Комплексний проект з розробки сучасного веб-сайту, який поєднує
                        інноваційний дизайн з високою функціональністю та зручністю
                        використання.
                     </p>
                  </div>
                  <div>
                     <div>
                        <h3 style={styles.categoriesLabel}>Категорії проекту</h3>
                        <div style={styles.categoriesWrapper}>
                           {categories.map((category, index) => (
                              <span
                                 key={index}
                                 style={styles.categoryTag}
                                 onMouseEnter={(e) => e.target.style.backgroundColor = '#27272a'}
                                 onMouseLeave={(e) => e.target.style.backgroundColor = '#18181b'}
                              >
                                 {category}
                              </span>
                           ))}
                        </div>
                     </div>
                     <div style={styles.detailsGrid}>
                        <div>
                           <h4 style={styles.detailLabel}>Клієнт</h4>
                           <p style={styles.detailValue}>ТАСКОМБАНК</p>
                        </div>
                        <div>
                           <h4 style={styles.detailLabel}>Рік</h4>
                           <p style={styles.detailValue}>2024</p>
                        </div>
                        <div>
                           <h4 style={styles.detailLabel}>Тривалість</h4>
                           <p style={styles.detailValue}>6 місяців</p>
                        </div>
                        <div>
                           <h4 style={styles.detailLabel}>Команда</h4>
                           <p style={styles.detailValue}>8 спеціалістів</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Chess Grid */}
               <div style={styles.grid}>
                  {blocks.map((block, index) => (
                     <div
                        key={index}
                        style={{
                           gridColumn: index === 0 || index === blocks.length - 1 ? '1 / -1' : 'auto', display: "flex"
                        }}
                     >
                        {block.type === 'image' ? (
                           <div style={{ ...styles.imageBlock, flex: "1 1 100%" }}>
                              <img
                                 src={block.src}
                                 alt={block.alt}
                                 style={styles.image}
                                 onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                 onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                              />
                           </div>
                        ) : (
                           <div
                              style={styles.textBlock}
                              onMouseEnter={(e) => e.target.style.backgroundColor = '#27272a'}
                              onMouseLeave={(e) => e.target.style.backgroundColor = '#18181b'}
                           >
                              <h3 style={styles.textBlockTitle}>{block.title}</h3>
                              <p style={styles.textBlockContent}>{block.content}</p>
                           </div>
                        )}
                     </div>
                  ))}
               </div>

               {/* CTA Section */}
               <div style={styles.cta}>
                  <h2 style={styles.ctaTitle}>Готові почати ваш проект?</h2>
                  <p style={styles.ctaText}>
                     Зв'яжіться з нами, щоб обговорити ваші ідеї
                  </p>
                  <button
                     style={styles.button}
                     onMouseEnter={(e) => e.target.style.backgroundColor = '#e5e5e5'}
                     onMouseLeave={(e) => e.target.style.backgroundColor = '#fff'}
                  >
                     Зв'язатися з нами
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                     </svg>
                  </button>
               </div>
            </div>
         </div>
         <Footer />
      </>

   );
}