import { cn } from '@/shared/components/ui/utils'
import { CATEGORIES } from '@/shared/constants'
import Link from 'next/link'
import { IconChevronRight } from '@tabler/icons-react'
import { SubListMenu } from '@/widgets/app-sidebar/ui/sub-list'
import React, { useEffect, useState } from 'react'
import { useWindowScroll } from 'react-use'
import { useSublistStore } from '@/shared/store/sublist.store'

interface IProps {
  className?: string
}

export const SidebarDefault: React.FC<IProps> = () => {
  const { y } = useWindowScroll()
  const [isOpen, setIsOpen] = useState(false)
  const [initialScroll, setInitialScroll] = useState(0)

  const { setSublist } = useSublistStore()

  useEffect(() => {
    setInitialScroll(window.scrollY)
  }, [])
  const topValue =
    initialScroll === 0 ? (y === 0 ? 105 : Math.max(105 - y, 0)) : 105
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
        'fixed left-0 z-10 max-w-[64] h-full w-full bg-background',
        isOpen && 'max-w-[280]'
      )}
    >
      <div
        className={
          'flex flex-col overflow-y-scroll justify-between max-h-screen relative'
        }
      >
        <nav className={'flex'}>
          <ul className={'w-full flex flex-col max-w-72 pt-4 border-r'}>
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
                </Link>

                <IconChevronRight
                  strokeWidth={1.5}
                  width={22}
                  height={22}
                  className='absolute top-2.5 right-1 translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-50 transition duration-500 ease-out'
                />
              </li>
            ))}

            {/*<AdditionalServices />*/}
          </ul>

          {isOpen && <SubListMenu />}
        </nav>
      </div>
    </aside>
  )
}
