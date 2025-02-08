'use client'

import React, { useEffect, useRef } from 'react'
import { FavoriteFooter } from './ui/favorite-footer'
import { FavoriteHeader } from './ui/favorite-header'
import { FavoriteProductList } from './ui/favorite-product-list'
import { useFavoriteStore } from '@/shared/store/app-favorites/favorite.store'
import { AnimatePresence, motion } from 'framer-motion'

export const AppFavorite = () => {
  const favoriteRef = useRef<HTMLDivElement>(null)
  const { isFavoriteOpen, setIsFavoriteOpen } = useFavoriteStore()

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        favoriteRef.current &&
        !favoriteRef.current.contains(e.target as Node)
      ) {
        setIsFavoriteOpen(false)
      }
    }

    if (isFavoriteOpen) {
      document.addEventListener('click', handleClickOutside)
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.body.classList.remove('no-scroll')
    }
  }, [isFavoriteOpen])

  return (
    <AnimatePresence>
      {isFavoriteOpen && (
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
            ref={favoriteRef}
            tabIndex={-1}
            initial={{ opacity: 0, y: '-50%', x: '-50%', scale: 0.9 }}
            animate={{ opacity: 1, y: '-50%', x: '-50%', scale: 1 }}
            exit={{ opacity: 0, y: '-50%', x: '-50%', scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={
              'absolute top-1/2 left-1/2 w-11/12 max-w-2xl bg-background rounded-[8px] md:max-w-4xl'
            }
          >
            <FavoriteHeader />

            <FavoriteProductList />

            <FavoriteFooter />
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
