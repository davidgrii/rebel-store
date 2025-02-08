'use client'

import React from 'react'
import Link from 'next/link'
import { HeaderHeartIcon, MapIcon, ShoppingCartIcon } from '@/shared/icons'
import { IconPhone } from '@tabler/icons-react'
import { useCartStore } from '@/shared/store/app-cart/cart.store'
import { AnimatePresence, motion } from 'framer-motion'
import { useFavoriteStore } from '@/shared/store/app-favorites/favorite.store'

export const Nav = () => {
  const { isShowEmptyMessage, setIsOpen, products, setIsShowEmptyMessage } =
    useCartStore()
  const {
    isShowFavEmptyMessage,
    favoriteProducts,
    setIsShowFavEmptyMessage,
    setIsFavoriteOpen
  } = useFavoriteStore()

  const handleCartClick = () => {
    if (products > 0) {
      setIsOpen(true)

      setIsShowEmptyMessage(false)

      return
    }

    setIsShowEmptyMessage(true)

    const timeoutId = setTimeout(() => {
      setIsShowEmptyMessage(false)
    }, 7000)

    return () => clearTimeout(timeoutId)
  }

  const handleFavoriteClick = () => {
    if (favoriteProducts > 0) {
      setIsFavoriteOpen(true)

      setIsShowFavEmptyMessage(false)

      return
    }

    setIsShowFavEmptyMessage(true)

    const timeoutId = setTimeout(() => {
      setIsShowFavEmptyMessage(false)
    }, 7000)

    return () => clearTimeout(timeoutId)
  }

  return (
    <nav className={'flex items-center transition lg:gap-5'}>
      <Link
        href={'tel:8 487 257 30 82'}
        className={
          'hidden gap-1 items-center cursor-pointer text-nowrap lg:flex'
        }
      >
        <IconPhone width={28} height={28} strokeWidth={1.5} />
        <span className={'gap-2 font-semibold hidden lg:flex'}>
          8 487 257 30 82
        </span>
      </Link>

      <div className={'flex items-center'}>
        <Link
          href={'tel:8 487 257 30 82'}
          className={
            'flex justify-center items-center text-[#414540] w-10 h-10 cursor-pointer rounded-full duration-300 transition hover:bg-secondary lg:hidden'
          }
        >
          <IconPhone width={28} height={28} strokeWidth={1.5} />
        </Link>

        <Link
          href={'/contact'}
          className={
            'flex justify-center items-center p-2 text-[#414540] w-10 h-10 cursor-pointer rounded-full duration-300 transition hover:bg-secondary'
          }
        >
          <MapIcon />
        </Link>

        <Link
          href={''}
          onClick={handleFavoriteClick}
          className={
            'flex justify-center relative items-center p-2 text-[#414540] w-10 h-10 cursor-pointer rounded-full duration-300 transition hover:bg-secondary'
          }
        >
          <HeaderHeartIcon />

          {isShowFavEmptyMessage && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={
                  'flex z-50 flex-col w-40 top-full p-2 right-[-13px] bg-background border absolute rounded-[8px] shadow-md'
                }
              >
                <div className='absolute top-0 right-[21px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-background w-2.5 h-2.5 border-t border-l'></div>

                <span className={'text-sm mb-1 font-medium'}>
                  Избранное пусто
                </span>
                <p className={'text-xs'}>
                  Озакомьтесь с нашими товарами в{' '}
                  <span className={'text-primary'}>каталоге</span>
                </p>
              </motion.div>
            </AnimatePresence>
          )}
        </Link>

        <Link
          href={''}
          onClick={handleCartClick}
          className={
            'flex justify-center items-center text-[#414540] relative w-10 h-10 cursor-pointer rounded-full duration-300 transition hover:bg-secondary'
          }
        >
          <ShoppingCartIcon />

          {isShowEmptyMessage && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={
                  'flex z-50 flex-col w-40 top-full p-2 right-[-13px] bg-background border absolute rounded-[8px] shadow-md'
                }
              >
                <div className='absolute top-0 right-[21px] -translate-x-1/2 -translate-y-1/2 rotate-45 bg-background w-2.5 h-2.5 border-t border-l'></div>

                <span className={'text-sm mb-1 font-medium'}>
                  Корзина пуста
                </span>
                <p className={'text-xs'}>
                  Озакомьтесь с нашими товарами в{' '}
                  <span className={'text-primary'}>каталоге</span>
                </p>
              </motion.div>
            </AnimatePresence>
          )}
        </Link>
      </div>
    </nav>
  )
}
