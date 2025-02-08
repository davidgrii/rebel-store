import React from 'react'
import { IconMapPin, IconShieldHeart, IconTruck } from '@tabler/icons-react'
import { Leaf } from 'lucide-react'
import { motion } from 'framer-motion'

interface IProps {
  className?: string
}

const benefits = [
  { icon: <IconTruck />, text: 'Доставка 3 дня' },
  { icon: <IconMapPin />, text: '53 салона в 20 городах ЦФО' },
  { icon: <Leaf />, text: 'Европейский Эко стандарт качества' },
  { icon: <IconShieldHeart />, text: 'Гарантия 3 года' }
]

export const Benefits: React.FC<IProps> = () => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 }
        }
      }}
      className='hidden gap-4 items-center text-sm p-5 px-7 bg-background md:flex'
    >
      {benefits.map((benefit, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
          }}
          className='flex justify-center flex-1 items-center gap-4'
        >
          {benefit.icon}
          <span>{benefit.text}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}
