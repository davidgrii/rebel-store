import React from 'react'
import { motion } from 'framer-motion'
import { ProductItem } from '@/shared/components/main/product-item'

interface IProps {
  className?: string
}

export const ProductsList: React.FC<IProps> = () => {
  return (
    <div className={'px-4 mb-10 lg:px-6'}>
      <h4 className={'text-lg font-bold my-8'}>Лидеры продаж</h4>

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
          }
        }}
        className={
          'grid grid-cols-1 gap-[1px] rounded-[8px] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'
        }
      >
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
            }}
          >
            <ProductItem />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
