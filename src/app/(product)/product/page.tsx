'use client'

import { ProductBreadcrumbs } from '@/shared/components/product/ui/breadcrumbs'
import { ProductItem } from '@/shared/components/product/ui/product-item'
import { ProductBuy } from '@/shared/components/product/ui/product-buy'
import { ProductDescription } from '@/shared/components/product/ui/product-description'
import { CTASection } from '@/shared/components/ui/cta-section'
import { Container } from '@/shared/components/ui/container'

export default function ProductPage() {
  return (
    <div className={'bg-secondary mt-6 pb-10 md:pl-16'}>
      <Container className={'bg-background lg:px-10'}>
        <ProductBreadcrumbs />

        <div className={'flex flex-col justify-between md:flex-row'}>
          <ProductItem />

          <ProductBuy />
        </div>

        <ProductDescription />
      </Container>

      <CTASection />
    </div>
  )
}
