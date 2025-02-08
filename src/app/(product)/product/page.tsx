'use client'

import { Hero } from '@/shared/components/main/hero'
import { ProductsList } from '@/shared/components/main/products-list'
import { CTASection } from '@/shared/components/ui/cta-section'
import { AboutCompany } from '@/shared/components/about-company'

export default function HomePage() {
  return (
    <div className={'lg:pl-72 bg-[#f5f5f5] pb-20'}>
      <Hero />

      <ProductsList />

      <AboutCompany />

      <CTASection />
    </div>
  )
}
