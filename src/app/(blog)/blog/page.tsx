'use client'

import { CTASection } from '@/shared/components/ui/cta-section'
import { Container } from '@/shared/components/ui/container'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbSeparator
} from '@/shared/components/ui/breadcrumb'
import Link from 'next/link'
import { ServicesMenu } from '@/widgets/app-sidebar/ui/services-menu'

const paymentInfo = [
  'Стоимость сборки указана на странице Товара.',
  'Сборку можно заказать в момент оформления Заказа или в любое другое время по желанию Покупателя, в т.ч. после передачи товара. ',
  'Минимальная стоимость услуг по сборке мебели - 1200 рублей.',
  'Монтаж Товаров осуществляется за дополнительную плату третьими лицами, которых Покупатель может привлечь самостоятельно или воспользоваться услугами лиц, рекомендованных интернет-магазином Мебель Шара. Оплата данных услуг осуществляется непосредственно третьему лицу согласно прейскуранту.',
  'Оплата выезда сервисного мастера на сборку за пределы населенного пункта, в котором присутствует фирменный салон «Мебель Шара» – 15р/км, для Москвы и Московской области - 25 руб/км за пределы г. Подольск, осуществляется Покупателем напрямую сервисному мастеру в момент сборки товара.'
]

export default function AssemblyPage() {
  return (
    <div className={'bg-secondary pb-10 md:pl-16'}>
      <div className={'flex'}>
        <ServicesMenu />

        <Container className={'bg-background pb-6 w-full md:px-10'}>
          <Breadcrumb className={'mt-6 mb-7'}>
            <BreadcrumbList className={'items-center'}>
              <Link href='/'>Главная</Link>
              <BreadcrumbSeparator />
              <Link href='#'>Сборка</Link>
            </BreadcrumbList>
          </Breadcrumb>
          <h3 className={'text-3xl font-bold mb-8'}>Сборка</h3>
          <ul
            className={
              'flex flex-col gap-1 mb-3 list-disc max-w-3xl text-[#2e332d]'
            }
          >
            {paymentInfo.map((item, index) => (
              <li className={'ml-4'} key={index}>
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <CTASection />
    </div>
  )
}
