import React from 'react'
import Image from 'next/image'
import { Input } from '@/shared/components/ui/input'
import { Button } from '@/shared/components/ui/button'
import { Checkbox } from '@/shared/components/ui/checkbox'
import { IconMailForward } from '@tabler/icons-react'

interface IProps {
  className?: string
}

export const CTASection: React.FC<IProps> = () => {
  return (
    <div
      className={
        'bg-background p-4 flex items-center justify-between md:h-44 mx-6 mt-4 md:pr-20'
      }
    >
      <Image
        className={'mr-8 hidden md:block'}
        width={230}
        height={180}
        src={'/1.jpg'}
        alt={'d'}
      />

      <div className={'flex-1 items-center md:flex'}>
        <h4
          className={
            'text-[16] leading-5 font-bold max-w-96 mb-4 md:mb-0 md:mr-4 md:text-2xl'
          }
        >
          Получайте самые интересные предложения первыми!{' '}
        </h4>

        <div className={'w-full gap-0 md:max-w-[480] md:gap-2 md:p-4'}>
          <div className={'flex mb-4 md:gap-2'}>
            <Input
              placeholder={'Email'}
              className={
                'border rounded-tr-none rounded-br-none rounded-tl rounded-bl h-11 flex flex-1 max-w-72 border-[#959991] md:rounded'
              }
              type={'email'}
            />

            <Button
              className={
                'font-bold rounded-tr rounded-br rounded-tl-none rounded-bl-none md:rounded h-11 md:px-5'
              }
              type={'submit'}
            >
              <IconMailForward
                width={25}
                height={25}
                className={'block md:hidden '}
              />
              <span className={'hidden md:block'}>Подписаться</span>
            </Button>
          </div>

          <div className='items-top flex space-x-2 text-foreground'>
            <Checkbox
              defaultChecked={true}
              className={'rounded w-5 h-5'}
              id='terms1'
            />
            <div className='grid gap-1.5 leading-none'>
              <p className='text-sm text-foreground'>
                Даю согласие на{' '}
                <span
                  className={
                    'text-[#34a814] cursor-pointer hover:text-[#2b8c10]'
                  }
                >
                  обработку моих персональных данных{' '}
                </span>
                в соответствии с{' '}
                <span
                  className={
                    'text-[#34a814] cursor-pointer hover:text-[#2b8c10]'
                  }
                >
                  политикой конфиденциальности
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
