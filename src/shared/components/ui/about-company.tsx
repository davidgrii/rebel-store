import React from 'react'
import { motion } from 'framer-motion'

interface IProps {
  className?: string
}

export const AboutCompany: React.FC<IProps> = () => {
  return (
    <div className={'mx-6 font-normal text-[#2e332d]'}>
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={'text-3xl font-bold mt-3 mb-8'}
      >
        Интернет магазин Mebelrb.by
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className={'mb-2'}
      >
        Мебельный интернет магазин «Мебель Шара» - это широкий ассортимент
        корпусной и мягкой мебели по самой выгодной стоимости с возможностью
        доставки в разные регионы России.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className={'mb-2'}
      >
        Через онлайн каталог можно приобрести любую мебель для дома: диваны,
        кровати, кресла, столы и стулья, кухонные и спальные гарнитуры,
        модульные наборы в прихожую, детские, и все это можно купить уже здесь и
        сейчас. Наш мебельный магазин собрал в каталоге все необходимое для
        обустройства дома, квартиры или офиса. Мы приглашаем Вас в путешествие в
        мир красивой, стильной и, безусловно, качественной мебели!
      </motion.p>
    </div>
  )
}
