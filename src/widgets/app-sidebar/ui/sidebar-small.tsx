'use client'

import { cn } from '@/shared/components/ui/utils'
import { CATEGORIES } from '@/shared/constants'
import Link from 'next/link'
import { IconChevronRight } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'
import { useSublistStore } from '@/shared/store/app-sidebar/sublist.store'
import { AdditionalServices } from '@/widgets/app-sidebar/ui/additional-services'
import { SubListMenu } from '@/widgets/app-sidebar/ui/sublist-menu'

interface IProps {
  className?: string
}

export const SidebarSmall: React.FC<IProps> = () => {
  const { y } = useWindowScroll()
  const [isOpen, setIsOpen] = useState(false)
  const [initialScroll, setInitialScroll] = useState(0)

  const { setSublist } = useSublistStore()

  const topValue =
    initialScroll === 0 ? (y === 0 ? 105 : Math.max(105 - y, 0)) : 105

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 0) {
        setInitialScroll(0)
      }
    }
  }, [])

  return (
    <aside
      style={{
        top: `${topValue}px`
      }}
      onMouseLeave={() => {
        setIsOpen(false)
        setSublist([], '')
      }}
      className={cn(
        'hidden fixed left-0 z-10 max-w-[64px] h-full w-full bg-background border-r lg:block',
        isOpen && 'max-w-[600px] border-r-none'
      )}
    >
      <div
        className={
          'flex flex-col overflow-y-scroll overflow-x-hidden justify-between max-h-screen relative'
        }
      >
        <nav className={'flex'}>
          <ul
            className={cn(
              'w-full flex flex-col max-w-72 pt-4',
              isOpen && 'border-r'
            )}
          >
            {CATEGORIES.map(({ title, Icon, sublist }, index) => (
              <li
                onMouseEnter={() => {
                  setIsOpen(true)
                  setSublist(sublist, title)
                }}
                key={index}
                className={'relative group'}
              >
                <Link
                  className={
                    'flex items-center w-full h-11 gap-2.5 duration-complex ease-linear transition-all hover:bg-[#ebebeb]'
                  }
                  href={'#'}
                >
                  <span className={'ml-4 w-9'}>
                    {' '}
                    <Icon />
                  </span>

                  <span className={'ml-1 font-normal'}>{title}</span>
                </Link>

                <IconChevronRight
                  strokeWidth={1.5}
                  width={22}
                  height={22}
                  className='absolute top-2.5 right-1 translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-50 transition duration-500 ease-out'
                />
              </li>
            ))}

            {isOpen && <AdditionalServices />}
          </ul>

          {isOpen && <SubListMenu />}
        </nav>
      </div>
    </aside>
  )
}
