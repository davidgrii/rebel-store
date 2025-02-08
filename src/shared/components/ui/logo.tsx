import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Logo = () => {
  return (
    <Link href={'/'} className={'ml-2'}>
      <Image
        className={'w-20 h-14 lg:h-16 lg:w-[104px]'}
        width={200}
        height={80}
        src={'/logo/rebel-logo.svg'}
        alt={'logo'}
      />
    </Link>
  )
}
