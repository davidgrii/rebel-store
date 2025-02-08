import React from 'react'
import { CATEGORIES } from '@/shared/constants'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface IProps {
  className?: string
}

export const MobileCategories: React.FC<IProps> = () => {
  return (
    <motion.ul
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1 }
        }
      }}
      className='w-full flex gap-2 overflow-y-scroll border-r px-4 mt-4 pb-4 lg:hidden'
    >
      {CATEGORIES.map(({ title, Icon }, index) => (
        <motion.li
          key={index}
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
          }}
          className='relative'
        >
          <Link
            className='flex select-none flex-col justify-center items-center gap-1.5 p-2 bg-background w-[100px] h-24 rounded ease-linear transition-all hover:bg-[#ebebeb]'
            href={'#'}
          >
            <span className='w-9'>
              <Icon />
            </span>
            <span className='text-center font-normal text-xs'>{title}</span>
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  )
}
