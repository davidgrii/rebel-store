import React from 'react'
import { Benefits } from '@/shared/components/main/benefits'
import { MobileCategories } from './mobile-categories'
import { MainCarousel } from '@/shared/components/main/main-carousel'

interface IProps {
  className?: string
}

export const Hero: React.FC<IProps> = () => {
  return (
    <>
      <MainCarousel />

      <Benefits />

      <MobileCategories />
    </>
  )
}
