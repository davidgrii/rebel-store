import React from 'react'
import { Button } from '@/shared/components/ui/button'
import { CloseIcon } from 'next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon'
import Image from 'next/image'
import Link from 'next/link'
import { IconHeartFilled } from '@tabler/icons-react'

interface IProps {
  className?: string
}

export const FavoriteProduct: React.FC<IProps> = () => {
  return (
    <div
      className={
        'flex flex-col justify-between items-center p-4 border-b md:flex-row'
      }
    >
      <div className={'flex justify-between w-full items-center mb-4 md:mb-0'}>
        <Button
          className={
            'opacity-40 w-8 h-8 rounded-full order-3 p-1 border-2 border-border transition-opacity hover:opacity-80 md:mr-8 md:order-none'
          }
          variant={'ghost'}
        >
          <CloseIcon />
        </Button>

        <div className={'flex items-center md:flex-row'}>
          <Image
            width={110}
            height={80}
            src={'/65bb7fbbef99b936848476.jpg'}
            className={'h-20 rounded mr-4 lg:mr-10'}
            alt={'d'}
          />

          <div
            className={
              'flex justify-center text-sm flex-col max-w-56 mr-1 sm:mr-6 sm:text-[15px] md:justify-between '
            }
          >
            <Link href={'#'} className={''}>
              Габриэль 160*200 (подъемник) Antonio sand
            </Link>
            <span className={'text-muted-foreground text-sm'}>Кровать</span>
          </div>
        </div>
      </div>

      <div
        className={
          'flex items-center justify-between w-full lg:justify-end lg:gap-16'
        }
      >
        <span className={'text-lg font-semibold sm:text-xl'}>39 999₽</span>

        <IconHeartFilled
          className={'text-accent w-7 h-7 md:w-8 md:h-8 md:mr-6'}
        />
      </div>
    </div>
  )
}
