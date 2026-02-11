'use client'

import Header from '@/components/Header'
import PortfolioHero from '@/components/portfolio/PortfolioHero'
import PortfolioGrid from '@/components/portfolio/PortfolioGrid'
import Footer from '@/components/Footer'
import ThreeBackground from '@/components/ThreeBackground'

export default function Portfolio() {
   return (
      <>
         {/* <ThreeBackground /> */}
         <div className="content-wrapper">
            <Header />
            <PortfolioHero />
            <PortfolioGrid />
            <Footer />
         </div>
      </>
   )
}
