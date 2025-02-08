import React from 'react'
import { FOOTER_SERVICES } from '@/shared/constants'
import Link from 'next/link'

interface IProps {
  className?: string
}

export const FooterServices: React.FC<IProps> = () => {
  return (
    <>
      <ul className={'flex pt-10 flex-col gap-2 text-sm lg:pt-0'}>
        <label className={'font-bold mb-3 text-lg'}>Услуги и сервисы</label>
        {FOOTER_SERVICES.map(({ text, href }, index) => (
          <li
            key={index}
            className={
              'cursor-pointer transition duration-300 hover:opacity-60'
            }
          >
            <Link href={href}>{text}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
