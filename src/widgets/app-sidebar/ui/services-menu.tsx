import { SERVICES } from '@/shared/constants'
import Link from 'next/link'
import { cn } from '@/shared/components/ui/utils'
import React from 'react'
import { usePathname } from 'next/navigation'

interface IProps {
  className?: string
}

export const ServicesMenu: React.FC<IProps> = () => {
  const pathName = usePathname()

  return (
    <div
      className={'hidden w-full bg-background max-w-60 border-r pt-6 md:block'}
    >
      <h4 className={'font-bold text-lg mb-4 px-6'}>Сервис</h4>

      <ul className={'flex flex-col text-sm'}>
        {SERVICES.map(({ text, href }, index) => (
          <Link
            className={cn(
              'flex items-center min-h-9 px-6 transition duration-200 hover:text-primary',
              pathName === href && 'text-primary border-primary border-l-2'
            )}
            key={index}
            href={href}
          >
            {text}
          </Link>
        ))}
      </ul>
    </div>
  )
}
