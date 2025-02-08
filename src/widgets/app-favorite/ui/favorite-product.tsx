import React from 'react'
import { Button } from '@/shared/components/ui/button'
import { CloseIcon } from 'next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon'
import Image from 'next/image'
import Link from 'next/link'
import { MinusIcon, PlusIcon } from '@/shared/icons'

interface IProps {
  className?: string
}

export const CartProduct: React.FC<IProps> = () => {
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
              'flex justify-center text-sm flex-col max-w-56 mr-1 sm:mr-5 sm:text-[15px] md:justify-between '
            }
          >
            <Link href={'#'} className={''}>
              Габриэль 160*200 (подъемник) Antonio sand
            </Link>
            <span className={'text-muted-foreground text-sm'}>Кровать</span>
          </div>
        </div>
      </div>

      <div className={'flex w-full justify-between '}>
        <span className={'text-lg font-normal sm:text-xl '}>39 999₽</span>

        <div
          className={'flex gap-2 items-center border border-[#bfc2be] rounded '}
        >
          <Button
            className={
              'w-8 h-8 rounded-full p-2 transition-opacity opacity-80 hover:opacity-100'
            }
            variant={'ghost'}
          >
            <MinusIcon />
          </Button>{' '}
          <span className={'font-bold '}>1</span>
          <Button
            className={
              'w-8 h-8 p-2 transition-opacity opacity-80 hover:opacity-100'
            }
            variant={'ghost'}
          >
            <PlusIcon />
          </Button>
        </div>

        <span className={'text-lg font-bold sm:text-xl md:mr-8'}>39 999₽</span>
      </div>
    </div>
  )
}
