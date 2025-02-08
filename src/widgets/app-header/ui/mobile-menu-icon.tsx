'use client'

import React from 'react'
import { AlignJustify } from 'lucide-react'
import { useMenuStore } from '@/shared/store/menu.store'

interface IProps {
  className?: string
}

export const Menu: React.FC<IProps> = () => {
  const { isOpen, setIsOpen } = useMenuStore()

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={'block lg:hidden cursor-pointer p-1 -m-1'}
    >
      <AlignJustify strokeWidth={1.5} />
    </div>
  )
}
