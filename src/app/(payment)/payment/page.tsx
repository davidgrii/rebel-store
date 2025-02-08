'use client'

import { motion } from 'framer-motion'
import { CTASection } from '@/shared/components/ui/cta-section'
import { Container } from '@/shared/components/ui/container'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/shared/components/ui/breadcrumb'
import Link from 'next/link'
import { ServicesMenu } from '@/widgets/app-sidebar/ui/services-menu'

const paymentInfo = [
  'Банковская карта. При оформлении заказа выберите способ оплаты «Карта» и оплатите товар банковской картой Visa, Mastercard, МИР, а также платежными сервисами SberPay, СБП.',
  'Карта рассрочки*. «Халва» ',
  'Безналичный платеж*. Для получения счета на оплату юридическому лицу выберите способ оплаты “Счет предприятия”. После получения заказа наш менеджер свяжется с Вами и выставит Вам счет на указанные контактные данные. ',
  'Кредит или Рассрочка*. Вы можете приобрести любые товары, представленные в интернет-магазине www.mebelshara.ru в кредит или в рассрочку без первого взноса, на срок от 6 до 36 месяцев. Выберите один из способов оплаты “Кредит” или “Рассрочка” и после получения заказа наш менеджер подберет для Вас наиболее подходящую программу кредитования.'
]

export default function PaymentPage() {
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
              <BreadcrumbItem>
                <Link href='/'>Главная</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <Link href='#'>Оплата</Link>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h3 className={'text-3xl font-bold mb-8'}>Оплата</h3>
          <ul
            className={
              'flex flex-col gap-1 mb-3 list-disc max-w-3xl text-[#2e332d]'
            }
          >
            <label>
              Вы можете произвести оплату товара следующим способом:
            </label>
            {paymentInfo.map((item, index) => (
              <li className={'ml-4'} key={index}>
                {item}
              </li>
            ))}
          </ul>

          <p className={'mb-3 max-w-3xl'}>
            Программы кредитования и рассрочки действуют во всех фирменных
            салонах Мебель Шара. Наши специалисты помогут Вам подобрать
            наилучшие условия в соответствии с Вашими пожеланиями.{' '}
          </p>

          <p className={'max-w-3xl'}>
            * При оплате товара в рассрочку (в том числе картой рассрочки
            собственными или заемными средствами), а также при безналичном
            расчете акции и скидки по товару обнуляются – покупка осуществляется
            по неакционной цене.
          </p>
        </Container>
      </div>

      <CTASection />
    </motion.div>
  )
}
