'use client'

import React, { useEffect, useRef } from 'react'
import { useCartStore } from '@/shared/store/app-cart/cart.store'
import { CartFooter } from './ui/cart-footer'
import { CartHeader } from './ui/cart-header'
import { CartProductList } from './ui/cart-product-list'
import { AnimatePresence, motion } from 'framer-motion'

export const AppCart = () => {
  const cartRef = useRef<HTMLDivElement>(null)
  const { isOpen, setIsOpen } = useCartStore()

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('click', handleClickOutside)
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.classList.remove('no-scroll')
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={
            'bg-black/45 fixed z-50 top-0 left-0 right-0 bottom-0 w-full h-full overflow-y-scroll'
          }
        >
          <motion.aside
            ref={cartRef}
            tabIndex={-1}
            initial={{ opacity: 0, y: '-50%', x: '-50%', scale: 0.9 }}
            animate={{ opacity: 1, y: '-50%', x: '-50%', scale: 1 }}
            exit={{ opacity: 0, y: '-50%', x: '-50%', scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='absolute top-1/2 left-1/2 w-11/12 max-w-2xl bg-background rounded-[8px] md:max-w-4xl'
          >
            <CartHeader />

            <CartProductList />

            <CartFooter />
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
