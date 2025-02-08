'use client'

import { motion } from 'framer-motion'

import { CTASection } from '@/shared/components/ui/cta-section'
import { Container } from '@/shared/components/ui/container'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/shared/components/ui/breadcrumb'
import { ServicesMenu } from '@/widgets/app-sidebar/ui/services-menu'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className={'bg-secondary pb-10 lg:pl-16'}
    >
      <div className={'flex'}>
        <ServicesMenu />

        <Container className={'bg-background pb-6 w-full md:px-10'}>
          <Breadcrumb className={'mt-6 mb-7'}>
            <BreadcrumbList className={'items-center'}>
              <Link href={'/'}>Главная</Link>
              <BreadcrumbSeparator />
              <Link href={''}>Контакты</Link>
            </BreadcrumbList>
          </Breadcrumb>

          <h3 className={'text-3xl font-bold mb-8'}>Контактные данные</h3>

          <ul className={'flex flex-col gap-1'}>
            <label className={'block font-bold text-[19px] mb-3'}>
              Реквизиты Продавца
            </label>
            <li>Общество с ограниченной ответственностью «Легион»</li>
            <li>Сокращённое наименование ООО «Легион»</li>
            <li>ИНН 5751059568, КПП 526001001, ОГРН 1165749061169</li>
            <li>
              603000, Нижегородская обл. г. Нижний Новгород, ул. Студеная, д.35
              А, пом.24
            </li>
            <li>Центрально-Черноземный филиал ООО «Экспобанк»</li>
            <li>Расчётный счёт: 40702810116160000304</li>
            <li>Корсчёт: 30101810345250000330</li>
            <li>БИК: 043807330</li>
            <li>
              Электронная почта:
              <a href={''} className={'text-primary cursor-pointer'}>
                {''} info@mebelshara.ru
              </a>
            </li>
            <li>
              Телефон:{' '}
              <a
                href={'tel:8 483 232 11 73'}
                className={'text-primary cursor-pointer'}
              >
                8 483 232 11 73
              </a>
            </li>
          </ul>
        </Container>
      </div>

      <CTASection />
    </motion.div>
  )
}
