import React from 'react'
import { FOOTER_LINKS } from '@/shared/constants'
import Link from 'next/link'

interface IProps {
  className?: string
}

export const FooterLinks: React.FC<IProps> = () => {
  return (
    <>
      <ul className={'flex flex-col gap-2 text-sm'}>
        <label className={'font-bold mb-3 text-lg'}>Mebelrb.by</label>
        {FOOTER_LINKS.map(({ text, href }, index) => (
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
