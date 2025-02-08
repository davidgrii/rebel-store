import React from 'react'
import { CATEGORIES } from '@/shared/constants'
import Link from 'next/link'
import { IconChevronRight } from '@tabler/icons-react'

interface IProps {
  className?: string
}

export const MobileCategoriesList: React.FC<IProps> = () => {
  return (
    <>
      <ul className={'w-full flex flex-col border-r pt-3'}>
        {CATEGORIES.map(({ title, Icon }, index) => (
          <li key={index}>
            <Link
              className={
                'flex justify-between pr-2 items-center w-full h-11 gap-2.5 border-t duration-complex ease-linear transition-all hover:bg-[#ebebeb]'
              }
              href={'#'}
            >
              <div className={'flex items-center ml-4 '}>
                <Icon />
                <span className={'ml-4 font-normal'}>{title}</span>
              </div>

              <IconChevronRight strokeWidth={1.5} width={22} height={22} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
