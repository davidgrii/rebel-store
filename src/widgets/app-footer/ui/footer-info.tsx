import React from 'react'
import Image from 'next/image'

interface IProps {
  className?: string
}

export const FooterInfo: React.FC<IProps> = () => {
  return (
    <div
      className={
        'flex flex-col justify-between lg:items-center text-nowrap my-12 text-muted-foreground lg:flex-row'
      }
    >
      <div className={'flex flex-col text-sm mb-3'}>
        <div className={'flex flex-col gap-3 lg:flex-row'}>
          <span>© Mebelshara 2015-2025</span>
          <span>Договор оферты до 31.12.2024 </span>
        </div>

        <div className={'flex flex-col gap-3 lg:flex-row'}>
          <span>Договор оферты с 01.01.2025 </span>
          <span> Политика конфиденциальности </span>
        </div>
      </div>

      <div
        className={
          'flex flex-col justify-between gap-2 text-sm sm:flex-row sm:items-center sm:gap-4'
        }
      >
        <span>Принимаем к оплате:</span>
        <Image src={'/payments.png'} width={200} height={30} alt={'ds'} />
      </div>
    </div>
  )
}
