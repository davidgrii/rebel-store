'use client'

import { cn } from '@/shared/components/ui/utils'
import { CATEGORIES } from '@/shared/constants'
import Link from 'next/link'
import { IconChevronRight } from '@tabler/icons-react'
import { AdditionalServices } from '@/widgets/app-sidebar/ui/additional-services'
import { SubListMenu } from '@/widgets/app-sidebar/ui/sublist-menu'
import React, { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'
import { useSublistStore } from '@/shared/store/app-sidebar/sublist.store'
import { useSidebarStore } from '@/shared/store/app-sidebar/sidebar.store'

interface IProps {
  className?: string
}

export const SidebarDefault: React.FC<IProps> = () => {
  const { y } = useWindowScroll()

  const [initialScroll, setInitialScroll] = useState(0)

  const { isOpen, setIsOpen } = useSidebarStore()
  const { setSublist } = useSublistStore()

  const topValue =
    initialScroll === 0 ? (y === 0 ? 102 : Math.max(105 - y, 0)) : 100

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
        'hidden fixed left-0 z-10 w-full max-w-72 h-full  bg-background lg:block',
        isOpen && 'max-w-[600px]'
      )}
    >
      <div
        className={
          'flex flex-col overflow-y-scroll justify-between max-h-screen border-r relative'
        }
      >
        <nav className={'flex'}>
          <ul className={'w-full flex flex-col max-w-72 border-r pt-3'}>
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

            <AdditionalServices />
          </ul>

          {isOpen && <SubListMenu />}
        </nav>
      </div>
    </aside>
  )
}
