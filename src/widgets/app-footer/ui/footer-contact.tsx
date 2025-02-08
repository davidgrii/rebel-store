import React from 'react'
import { IconBrandInstagram } from '@tabler/icons-react'

interface IProps {
  className?: string
}

export const FooterContact: React.FC<IProps> = () => {
  return (
    <>
      <div className={'pt-10 lg:pt-0'}>
        <span
          className={
            'font-bold text-2xl mb-3 transition duration-300 hover:opacity-60 cursor-pointer'
          }
        >
          8 483 232 14 87{' '}
        </span>
        <p className={'mb-10'}>
          Консультации по телефону: <br /> с 9:00 до 21:00
        </p>

        <div className={'flex flex-col'}>
          <span className={'text-lg font-bold mb-2.5'}>Присоединяйтесь</span>

          <div
            className={
              'p-1.5 border border-[#00000014] w-8  cursor-pointer rounded-full'
            }
          >
            <IconBrandInstagram
              className={'text-[#999e98]'}
              width={20}
              height={20}
              strokeWidth={1.8}
            />
          </div>
        </div>
      </div>
    </>
  )
}
