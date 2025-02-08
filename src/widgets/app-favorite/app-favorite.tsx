'use client'

import React, { useEffect, useRef } from 'react'
import { FavoriteFooter } from './ui/favorite-footer'
import { FavoriteHeader } from './ui/favorite-header'
import { FavoriteProductList } from './ui/favorite-product-list'
import { useFavoriteStore } from '@/shared/store/app-favorites/favorite.store'

export const AppFavorite = () => {
  const favoriteRef = useRef<HTMLDivElement>(null)
  const { isOpen, setIsOpen } = useFavoriteStore()

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        favoriteRef.current &&
        !favoriteRef.current.contains(e.target as Node)
      ) {
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
    <>
      {isOpen && (
        <div
          className={
            'bg-black/45 fixed z-50 top-0 left-0 right-0 bottom-0 w-full transition duration-[400ms] ease-in-out h-full overflow-y-scroll'
          }
        >
          <aside
            ref={favoriteRef}
            tabIndex={-1}
            className={
              'absolute top-1/2 left-1/2 w-11/12 max-w-2xl bg-background rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 md:max-w-4xl'
            }
          >
            <FavoriteHeader />

            <FavoriteProductList />

            <FavoriteFooter />
          </aside>
        </div>
      )}
    </>
  )
}
