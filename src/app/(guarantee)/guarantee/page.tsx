'use client'

import { CTASection } from '@/shared/components/ui/cta-section'
import { Container } from '@/shared/components/ui/container'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/shared/components/ui/breadcrumb'
import Link from 'next/link'
import { SERVICES } from '@/shared/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/shared/components/ui/utils'

const paymentInfo = [
  'Банковская карта. При оформлении заказа выберите способ оплаты «Карта» и оплатите товар банковской картой Visa, Mastercard, МИР, а также платежными сервисами SberPay, СБП.',
  'Карта рассрочки*. «Халва» ',
  'Безналичный платеж*. Для получения счета на оплату юридическому лицу выберите способ оплаты “Счет предприятия”. После получения заказа наш менеджер свяжется с Вами и выставит Вам счет на указанные контактные данные. ',
  'Кредит или Рассрочка*. Вы можете приобрести любые товары, представленные в интернет-магазине www.mebelshara.ru в кредит или в рассрочку без первого взноса, на срок от 6 до 36 месяцев. Выберите один из способов оплаты “Кредит” или “Рассрочка” и после получения заказа наш менеджер подберет для Вас наиболее подходящую программу кредитования.'
]

export default function PaymentPage() {
  const pathName = usePathname()

  return (
    <div className={'bg-secondary pb-10 pl-16'}>
      <div className={'flex'}>
        <div className={'w-full bg-background max-w-60 border-r pt-6'}>
          <h4 className={'font-bold text-lg mb-4 px-6'}>Сервис</h4>

          <ul className={'flex flex-col text-sm'}>
            {SERVICES.map(({ text, href }, index) => (
              <Link
                className={cn(
                  'flex items-center min-h-9 px-6 transition duration-200 hover:text-primary',
                  pathName === href && 'text-primary border-primary border-l-2'
                )}
                key={index}
                href={href}
              >
                {text}
              </Link>
            ))}
          </ul>
        </div>

        <Container className={'bg-background px-10 pb-6 w-full'}>
          <Breadcrumb className={'mt-6 mb-7'}>
            <BreadcrumbList className={'items-center'}>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link href='/'>Главная</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link href='#'>Оплата</Link>
                </BreadcrumbLink>
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

      <CTASection className={'mx-10'} />
    </div>
  )
}
