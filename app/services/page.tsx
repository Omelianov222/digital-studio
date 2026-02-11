'use client'

import Header from '@/components/Header'
import ServicesHero from '@/components/services/ServicesHero'
import PortfolioGrid from '@/components/portfolio/PortfolioGrid'
import Footer from '@/components/Footer'
import ThreeBackground from '@/components/ThreeBackground'
import Services from '@/components/services/Services'

export default function Portfolio() {
   return (
      <>
         {/* <ThreeBackground /> */}
         <div className="content-wrapper">
            <Header />
            <ServicesHero />
            <Services />
            <Footer />
         </div>
      </>
   )
}
