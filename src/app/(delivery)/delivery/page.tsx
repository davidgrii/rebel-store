'use client'

import { ProductBreadcrumbs } from '@/shared/components/product/ui/breadcrumbs'
import { Product } from '@/shared/components/product/ui/product'
import { ProductBuy } from '@/shared/components/product/ui/product-buy'
import { ProductBenefits } from '@/shared/components/product/ui/product-benefits'
import { CTASection } from '@/shared/components/ui/cta-section'
import { Container } from '@/shared/components/ui/container'

export default function ProductPage() {
  return (
    <div className={'bg-secondary mt-6 pb-10 pl-16'}>
      <Container className={'bg-background px-10'}>
        <ProductBreadcrumbs />

        <div className={'flex justify-between'}>
          <Product />

          <ProductBuy />
        </div>

        <ProductBenefits />
      </Container>

      <CTASection className={'mx-10'} />
    </div>
  )
}
