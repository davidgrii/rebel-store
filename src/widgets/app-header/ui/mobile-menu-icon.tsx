'use client'

import React from 'react'
import { AlignJustify } from 'lucide-react'
import { useMobileMenuStore } from '@/shared/store/app-sidebar/mobile-menu.store'

interface IProps {
  className?: string
}

export const MobileBurgerIcon: React.FC<IProps> = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenuStore()

  return (
    <div
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className={'block lg:hidden cursor-pointer p-1 -m-1'}
    >
      <AlignJustify strokeWidth={1.5} />
    </div>
  )
}
