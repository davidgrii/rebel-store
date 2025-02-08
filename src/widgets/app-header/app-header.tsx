import React from 'react'
import { Logo } from '@/shared/components/ui/logo'
import { Input } from '@/shared/components/ui/input'
import { IconPhone } from '@tabler/icons-react'
import { Heart, MapPin, ShoppingCart, UserRound } from 'lucide-react'
import Image from 'next/image'

export const AppHeader = () => {
  return (
    <>
      <a className={'bg-primary flex justify-center max-h-10'}>
        <Image
          className={'object-cover'}
          width={700}
          height={40}
          src={'/6773d3b15b8bf015715225.jpg'}
          alt={'ddd'}
        />
      </a>

      <header className={'flex justify-between items-center px-5 shadow-lg'}>
        <Logo />

        <Input className={'bg-secondary rounded w-8/12'} type={'search'} />

        <nav className={'flex items-center gap-5'}>
          <span className={'flex gap-0.5 items-center'}>
            <IconPhone width={23} />8 487 257 30 82
          </span>

          <div className={'flex gap-0.5 items-center'}>
            <div
              className={
                'p-2 text-[#414540] bg-none cursor-pointer transition-colors rounded-full hover:bg-secondary'
              }
            >
              <MapPin width={26} height={26} />
            </div>

            <div
              className={
                'p-2 text-[#414540] bg-none cursor-pointer transition-colors rounded-full hover:bg-secondary'
              }
            >
              <UserRound width={26} height={26} />
            </div>

            <div
              className={
                'p-2 text-[#414540] bg-none cursor-pointer transition-colors rounded-full hover:bg-secondary'
              }
            >
              <Heart width={26} height={26} />
            </div>

            <div
              className={
                'p-2 text-[#414540] bg-none cursor-pointer transition-colors rounded-full hover:bg-secondary'
              }
            >
              <ShoppingCart width={26} height={26} />
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
