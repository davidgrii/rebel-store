import React from 'react'
import { ADDITIONAL_SERVICES } from '@/shared/constants'
import Link from 'next/link'
import { useSidebarStore } from '@/shared/store/app-sidebar/sidebar.store'

interface IProps {
  className?: string
}

export const AdditionalServices: React.FC<IProps> = () => {
  const { setIsOpen } = useSidebarStore()

  return (
    <>
      <div className={'inline-block w-full border-t'}>
        <ul className={'flex flex-col gap-3 p-6'}>
          {ADDITIONAL_SERVICES.map((item, index) => (
            <li key={index}>
              <Link
                onClick={() => setIsOpen(false)}
                className={
                  'inline-flex font-normal items-center transition duration-300 hover:opacity-60'
                }
                href={item.href}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
