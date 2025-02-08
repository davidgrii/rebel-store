import React from 'react'
import Image from 'next/image'

interface IProps {
  className?: string
}

export const Advertisement: React.FC<IProps> = () => {
  return (
    <>
      <a className={'bg-primary flex justify-center max-h-10'}>
        <Image
          className={'object-cover'}
          width={700}
          height={40}
          src={'/others/ad.jpg'}
          alt={'image'}
        />
      </a>
    </>
  )
}
