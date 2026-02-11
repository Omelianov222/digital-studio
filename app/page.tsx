'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/services/Services'
import About from '@/components/About'
import Stats from '@/components/Stats'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ThreeBackground from '@/components/ThreeBackground'
import ExpertiseCards from '@/components/Expertisecards'

export default function Home() {
   return (
      <>
         {/* <ThreeBackground /> */}
         <div className="content-wrapper">
            <Header />
            <Hero />
            <ExpertiseCards />
            <About />
            <CTA />
            <Footer />
         </div>
      </>
   )
}
