import React from 'react'
import Image from 'next/image'
import { Input } from '@/shared/components/ui/input'
import { Button } from '@/shared/components/ui/button'
import { Checkbox } from '@/shared/components/ui/checkbox'
import { IconMailForward } from '@tabler/icons-react'
import { motion } from 'framer-motion'

interface IProps {
  className?: string
}

export const CTASection: React.FC<IProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className={
        'bg-background p-4 flex items-center justify-between mx-4 mt-14 sm:mx-6 md:pl-0 md:h-56 lg:pr-10 xl:pr-20'
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Image
          className={'mr-8 hidden md:block'}
          width={230}
          height={180}
          src={'/CTA-img.jpg'}
          alt={'d'}
        />
      </motion.div>

      <div className={'flex-1 items-center xl:flex'}>
        <motion.h4
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={
            'text-[16] leading-5 font-bold mb-4 lg:max-w-96 md:mb-0 md:mr-4 md:text-[17px] xl:text-2xl'
          }
        >
          Получайте самые интересные предложения первыми!{' '}
        </motion.h4>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={'w-full gap-0 md:pl-0 md:max-w-[480] md:gap-2 md:p-4'}
        >
          <div className={'flex mb-4 md:gap-2'}>
            <Input
              type={'email'}
              placeholder={'Email'}
              className={
                'flex w-full border rounded-tr-none rounded-br-none rounded-tl rounded-bl h-11 max-w-72 border-[#959991] md:rounded'
              }
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className='items-top flex space-x-2 text-foreground'
          >
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
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
