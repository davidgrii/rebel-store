import React from 'react'
import { Badge } from '@/shared/components/ui/badge'
import { Button } from '@/shared/components/ui/button'
import { IconList } from '@tabler/icons-react'
import { ArrowRightIcon, HeartIcon, PhoneIcon } from '@/shared/icons'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/shared/components/ui/sheet'
import { useFavoriteStore } from '@/shared/store/app-favorites/favorite.store'

interface IProps {
  className?: string
}

export const ProductBuy: React.FC<IProps> = () => {
  const { favoriteProducts, setIsFavoriteOpen, setIsFavoriteProduct } =
    useFavoriteStore()

  const handleAddFavorite = () => {
    setIsFavoriteOpen(true)
    setIsFavoriteProduct(favoriteProducts + 1)
  }

  return (
    <>
      <div className={'mt-4 mb-4 w-full md:max-w-72 lg:max-w-xs'}>
        <div className={'flex justify-between mb-6'}>
          <Badge
            className={
              'bg-primary h-5 text-xs font-normal text-background border-0'
            }
            variant='outline'
          >
            Есть в наличии
          </Badge>

          <Button
            size={'icon'}
            variant={'link'}
            className={
              'flex justify-center items-center rounded-full w-[38px] h-[38px] border duration-300 transition text-muted-foreground hover:text-[#FF5021]'
            }
            onClick={handleAddFavorite}
          >
            <HeartIcon />
          </Button>
        </div>

        <div className={'bg-[#e6fae1] w-full rounded px-6 py-4 mb-8'}>
          <div className={'flex items-center gap-2 mb-6'}>
            <span className={'text-2xl font-bold'}>24.999₽</span>
            <span
              className={
                'text-sm line-through text-muted-foreground font-normal'
              }
            >
              50 000₽
            </span>

            <Badge
              className={
                'bg-accent text-xs px-1 py-0 h-4 font-bold max-w-[38px] text-center hover:bg-accent/80'
              }
            >
              -50%
            </Badge>
          </div>

          <Button className={'w-full h-11 font-bold mb-3 rounded'}>
            Оставить заявку
          </Button>
        </div>

        <div className={'mb-6'}>
          <Sheet>
            <SheetTrigger
              className={
                'w-full justify-between items-center flex py-3 cursor-pointer border-t border-b'
              }
            >
              <div className={'flex items-center gap-4'}>
                <IconList className={'text-primary'} />
                <span>Характеристики</span>
              </div>

              <ArrowRightIcon />
            </SheetTrigger>
            <SheetTrigger
              className={
                'flex w-full justify-between items-center py-3 cursor-pointer border-t border-b'
              }
            >
              <div className={'flex items-center gap-4'}>
                <IconList className={'text-primary'} />
                <span>Кредитные карты</span>
              </div>

              <ArrowRightIcon />
            </SheetTrigger>
            <SheetTrigger
              className={
                'flex w-full justify-between items-center py-3 cursor-pointer border-t border-b'
              }
            >
              <div className={'flex items-center gap-4'}>
                <IconList className={'text-primary'} />
                <span>Дополнительные услуги</span>
              </div>

              <ArrowRightIcon />
            </SheetTrigger>

            <SheetContent className=''>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <div className={'flex h-11'}>
          <div
            className={
              'p-2 rounded w-full border-primary border-2 rounded-tr-none rounded-br-none'
            }
          >
            <span className={'font-normal px-4 py-2'}>
              Заказать обратный звонок
            </span>
          </div>

          <Link
            href={'/'}
            className={
              'flex items-center justify-center h-11 min-w-11 bg-primary rounded-tr rounded-br'
            }
          >
            <PhoneIcon />
          </Link>
        </div>
      </div>
    </>
  )
}
