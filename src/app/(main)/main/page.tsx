'use client'

import { Hero } from '@/shared/components/main/hero'
import { ProductsList } from '@/shared/components/main/products-list'
import { CTASection } from '@/shared/components/ui/cta-section'
import { AboutCompany } from '@/shared/components/ui/about-company'
import { Container } from '@/shared/components/ui/container'

export default function HomePage() {
  return (
    <div className={'bg-[#f5f5f5] pb-20 lg:ml-72'}>
      <Container className={'p-0'}>
        <Hero />

        <ProductsList />

        <AboutCompany />
      </Container>

      <CTASection />
    </div>
  )
}
