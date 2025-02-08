import React from 'react'
import Image from 'next/image'
import { IconStarFilled } from '@tabler/icons-react'
import { Badge } from '@/shared/components/ui/badge'
import Link from 'next/link'
import { CartIcon, HeartIcon } from '@/shared/icons'
import { Button } from '@/shared/components/ui/button'
import { useCartStore } from '@/shared/store/app-cart/cart.store'
import { useFavoriteStore } from '@/shared/store/app-favorites/favorite.store'

interface IProps {
  className?: string
}

export const ProductItem: React.FC<IProps> = () => {
  const { products, setIsOpen, setIsProduct } = useCartStore()
  const { favoriteProducts, setIsFavoriteOpen, setIsFavoriteProduct } =
    useFavoriteStore()

  const handleAddProduct = () => {
    setIsOpen(true)
    setIsProduct(products + 1)
  }

  const handleAddFavorite = () => {
    setIsFavoriteOpen(true)
    setIsFavoriteProduct(favoriteProducts + 1)
  }

  return (
    <>
      <Link href={'/product'}>
        <div
          className={
            'w-full bg-background cursor-pointer select-none hover:rounded-[8px] hover:shadow-xl px-6 py-10'
          }
        >
          <Image
            width={500}
            height={300}
            src={'/thumb_55512_320_152_0_0_auto@2x.jpg'}
            alt={'image'}
            className={'rounded mb-4 w-full'}
          />
          <div>
            <h3 className={'text-[#737773] font-light text-sm mb-1.5'}>
              Модульная кухня
            </h3>

            <h2 className={'text-[#101210] font-medium leading-none mb-2'}>
              Равенна Спарк Белый/фон фреско
            </h2>
            <div className={'flex'}>
              <IconStarFilled className={'text-[#ffce00] w-3.5'} />
              <IconStarFilled className={'text-[#ffce00] w-3.5'} />
              <IconStarFilled className={'text-[#ffce00] w-3.5'} />
              <IconStarFilled className={'text-[#ffce00] w-3.5'} />
              <IconStarFilled className={'text-[#ffce00] w-3.5'} />
              <span className={'ml-2 text-sm text-[#737773]'}>1 отзыв</span>
            </div>
          </div>

          <div className={'flex flex-col mt-4'}>
            <div className={'flex gap-2'}>
              <span
                className={'line-through text-sm text-muted-foreground mb-1.5'}
              >
                50 000₽
              </span>

              <Badge
                className={
                  'bg-accent text-xs px-1 py-0 h-4 font-bold max-w-10 text-center hover:bg-accent/80'
                }
              >
                -50%
              </Badge>
            </div>

            <div className={'flex justify-between'}>
              <span className={'text-2xl font-bold mb-1.5'}>24 999₽</span>
              <div className={'flex gap-1'}>
                <Button
                  size={'icon'}
                  variant={'link'}
                  onClick={handleAddFavorite}
                  className={
                    'flex px-0 py-0 justify-center bg-background items-center rounded-full w-[38px] h-[38px] border duration-300 transition text-muted-foreground hover:text-[#FF5021]'
                  }
                >
                  <HeartIcon />
                </Button>

                <Button
                  onClick={handleAddProduct}
                  size={'icon'}
                  variant={'link'}
                  className={
                    'flex px-0 py-0 justify-center items-center rounded-full w-12 h-10 bg-secondary duration-300 transition text-muted-foreground hover:bg-primary hover:text-background'
                  }
                >
                  <CartIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
